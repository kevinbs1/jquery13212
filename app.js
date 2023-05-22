// app.js

$(document).ready(function() {
    // Manipulador de evento para o envio do formulário
    $("#taskForm").submit(function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      
      // Obtém o valor da tarefa inserido no formulário
      const taskName = $("#taskName").val();
      
      // Cria um novo item de lista e adiciona à lista de tarefas
      const listItem = $("<li></li>").text(taskName);
      $("#taskList").append(listItem);
      
      // Limpa o campo de entrada após o cadastro
      $("#taskName").val("");
    });
    
    // Manipulador de evento para clicar nos itens da lista
    $(document).on("click", "li", function() {
      $(this).toggleClass("completed");
    });
  });
  