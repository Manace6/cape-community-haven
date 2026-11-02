document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('program-search');
    const programCards = document.querySelectorAll('.program-card');

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const query = e.target.value.toLowerCase();
            programCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const text = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(query) || text.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isOpen = body.style.display === 'block';
            document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
            body.style.display = isOpen ? 'none' : 'block';
        });
    });

    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const type = document.getElementById('enquiry-type').value;
            const message = document.getElementById('message').value.trim();
            const responseDiv = document.getElementById('form-response');

            if (!name || !email || !message) {
                responseDiv.className = 'response-error';
                responseDiv.textContent = 'Please complete all required fields before submitting.';
                responseDiv.style.display = 'block';
                return;
            }

            let detailMsg = '';
            if (type === 'volunteer') {
                detailMsg = 'Thank you for volunteering! Our coordinator will contact you with orientation schedules within 48 hours.';
            } else if (type === 'sponsor') {
                detailMsg = 'Thank you for your corporate sponsorship request. Our team will send our partnership deck shortly.';
            } else {
                detailMsg = 'Thank you for your generous donor enquiry. We appreciate your support for Cape Community Haven.';
            }

            responseDiv.className = 'response-success';
            responseDiv.innerHTML = `<strong>Enquiry Submitted!</strong><br>${detailMsg}`;
            responseDiv.style.display = 'block';
            enquiryForm.reset();
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();
            const responseDiv = document.getElementById('contact-response');

            if (!name || !email || !message) {
                responseDiv.className = 'response-error';
                responseDiv.textContent = 'Please fill out all required fields.';
                responseDiv.style.display = 'block';
                return;
            }

            responseDiv.className = 'response-success';
            responseDiv.innerHTML = `<strong>Message Sent!</strong><br>Thank you ${name}. Your message has been routed to our Cape Town central office.`;
            responseDiv.style.display = 'block';
            contactForm.reset();
        });
    }
});