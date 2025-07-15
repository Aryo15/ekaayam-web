
export const submitToGoogleSheets = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwOMkKyzAfZdyXzTltyPcnj3pmEtyqXlURVp6ecS-a5k0ePjergWSXFCTcZZIvjQX9N/exec';
    const formData = new FormData();
    const email = document.getElementById("Email").value;

    formData.append('Email', email);

    console.log('Submitting form data:', { email });

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
