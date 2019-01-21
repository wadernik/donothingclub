class Patient extends Array {
   constructor (...args) {
      super(...args);
   }

   add(patient) {
      this.push(patient);
   }

   printPatient() {
      var tableBody;
      if (this.length == 0) {
         $('#tBody').empty();
      } else {
         this.forEach(element => {
            tableBody +=
            `<tr>
            <td>${element.patientNum}</td>
            <td>${element.name}</td>
            <td>${element.diagnosis}</td>
            <td>${element.ward}</td>
            </tr>`;
         });
         $('#tBody').html(tableBody);
      }
   }
   
   findPatient(key) {
      let index = this.findIndex(el => el.patientNum == key);
      if (index >= 0) {
         var row = $('table').find('tr')
         .removeClass('active')
         .eq(index + 1)
         .addClass('active');
         
         if (row.length){
            $(window).scrollTop( row.offset().top - ($(window).height()/2) );
         }   
      } else {
         alert('Пациент не найден');
      }
   }

   removePatient(key) {
      let index = this.findIndex(el => el.patientNum == key);
      if (index >= 0) {
         this.splice(index, 1);
         alert('Успешно удалено');
      } else {
         alert('Пациент не найден');
      }
   }
}