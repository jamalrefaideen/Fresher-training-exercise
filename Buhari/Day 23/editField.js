function editField(event) {
  if (event.target.id == "edit-btn") {
    var emailId = event.target.parentElement.parentElement.cells.item(1)
      .textContent;
    editField(emailId);
  }
}
