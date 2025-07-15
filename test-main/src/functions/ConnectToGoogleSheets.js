
export const connectToGoogleSheets = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyRBoM9lcd0p6e68gmmUsEHmD1mNTOK-6xyELylLtuUgLQZPfPoq7QImhuMHMbxn9q5/exec';
    const formData = new FormData();
    const Name = document.getElementById("Name").value;
    const Company_Name = document.getElementById("Company_Name").value;
    const Email = document.getElementById("Email").value;
    const Phone = document.getElementById("Phone").value;
    const Purpose = document.getElementById("Purpose").value;

    formData.append('Name', Name);
    formData.append('Company Name', Company_Name);
    formData.append('Email', Email);
    formData.append('Phone', Phone);
    formData.append('Purpose', Purpose);

    // console.log('Submitting form data:', { email });

    alert('Form has been submitted successfully!');

    localStorage.clear(); // Clear all data in local storage

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            console.log('Received response from Google Sheets script:', response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Google Sheets submission successful. Response:', data);
        })
        .catch(error => {
            console.error('Error during form submission:', error);
        });
};
