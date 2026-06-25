// =====================================================================
//  GOOGLE APPS SCRIPT — Recebe dados do formulário Arton e salva na planilha
//
//  INSTRUÇÕES:
//  1. Abra a planilha que você criou no Google Sheets
//  2. Clique em Extensões > Apps Script
//  3. Apague o código que aparecer e cole TODO este arquivo
//  4. Clique em Salvar (ícone de disquete)
//  5. Clique em "Implantar" > "Nova implantação"
//  6. Em "Tipo", escolha "App da Web"
//  7. Em "Quem pode acessar", escolha "Qualquer pessoa"
//  8. Clique em "Implantar" e autorize o acesso
//  9. Copie a URL gerada e cole no index.html onde está: COLE_A_URL_AQUI
// =====================================================================

function doPost(e) {
  try {
    // Abre a planilha ativa e a primeira aba
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Cria cabeçalho se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Data/Hora',
        'Nome',
        'E-mail',
        'Telefone',
        'CPF/CNPJ',
        'Nível de Investimento',
        'Melhor Período',
        'Mensagem',
        'Optin'
      ]);
      // Formata cabeçalho em negrito
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
    }

    // Lê os dados do POST
    var data = JSON.parse(e.postData.contents);

    // Formata data/hora em horário de Brasília
    var agora = new Date();
    var dataFormatada = Utilities.formatDate(agora, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss');

    // Adiciona linha na planilha
    sheet.appendRow([
      dataFormatada,
      data.nome     || '',
      data.email    || '',
      data.tel      || '',
      data.cpfcnpj  || '',
      data.nivel    || '',
      data.periodo  || '',
      data.mensagem || '',
      data.optin ? 'Sim' : 'Não'
    ]);

    // Retorna sucesso (não é lido pelo front por causa do no-cors, mas boa prática)
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste — rode manualmente para verificar se está salvando
function testar() {
  var fakeEvent = {
    postData: {
      contents: JSON.stringify({
        nome: 'Teste',
        email: 'teste@email.com',
        tel: '(11) 99999-9999',
        cpfcnpj: '000.000.000-00',
        nivel: '5-20',
        periodo: 'manha',
        mensagem: 'Mensagem de teste',
        optin: true
      })
    }
  };
  doPost(fakeEvent);
  Logger.log('Teste concluído — verifique a planilha.');
}
