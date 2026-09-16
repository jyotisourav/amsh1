// =========================================================
// ARATI MEDICAL STORE & HEALTHCARE
// JavaScript
// =========================================================


// ---------------------------------------------------------
// ELEMENTS
// ---------------------------------------------------------

const modal = document.getElementById("appointmentModal");

const appointmentButton =
    document.getElementById("appointmentButton");

const heroAppointment =
    document.getElementById("heroAppointment");

const bannerAppointment =
    document.getElementById("bannerAppointment");

const closeModal =
    document.getElementById("closeModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const appointmentForm =
    document.getElementById("appointmentForm");

const appointmentMessage =
    document.getElementById("appointmentMessage");

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


// ---------------------------------------------------------
// OPEN APPOINTMENT MODAL
// ---------------------------------------------------------

function openAppointment() {

    if (!modal) {
        return;
    }

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

    // Set minimum appointment date to tomorrow
    const dateInput =
        document.getElementById("date");

    if (dateInput) {

        const tomorrow = new Date();

        tomorrow.setDate(
            tomorrow.getDate() + 1
        );

        const year =
            tomorrow.getFullYear();

        const month =
            String(
                tomorrow.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                tomorrow.getDate()
            ).padStart(2, "0");

        dateInput.min =
            `${year}-${month}-${day}`;
    }

    // Focus first field
    const nameInput =
        document.getElementById("name");

    if (nameInput) {
        nameInput.focus();
    }
}


// ---------------------------------------------------------
// CLOSE APPOINTMENT MODAL
// ---------------------------------------------------------

function closeAppointment() {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


// ---------------------------------------------------------
// APPOINTMENT BUTTONS
// ---------------------------------------------------------

if (appointmentButton) {

    appointmentButton.addEventListener(
        "click",
        openAppointment
    );

}

if (heroAppointment) {

    heroAppointment.addEventListener(
        "click",
        openAppointment
    );

}

if (bannerAppointment) {

    bannerAppointment.addEventListener(
        "click",
        openAppointment
    );

}


// ---------------------------------------------------------
// CLOSE MODAL
// ---------------------------------------------------------

if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeAppointment
    );

}

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeAppointment
    );

}


// ---------------------------------------------------------
// ESCAPE KEY
// ---------------------------------------------------------

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeAppointment();

        }

    }
);


// ---------------------------------------------------------
// APPOINTMENT FORM
// ---------------------------------------------------------

if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get form values

            const nameInput =
                document.getElementById("name");

            const phoneInput =
                document.getElementById("phone");

            const dateInput =
                document.getElementById("date");

            const timeInput =
                document.getElementById("time");

            const messageInput =
                document.getElementById("message");


            const name =
                nameInput
                    ? nameInput.value.trim()
                    : "";

            const phone =
                phoneInput
                    ? phoneInput.value.trim()
                    : "";

            const date =
                dateInput
                    ? dateInput.value
                    : "";

            const time =
                timeInput
                    ? timeInput.value
                    : "";

            const enquiry =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            // Validate required fields

            if (
                !name ||
                !phone ||
                !date ||
                !time
            ) {

                if (appointmentMessage) {

                    appointmentMessage.textContent =
                        "Please complete all required fields.";

                }

                return;
            }


            // Display confirmation

            if (appointmentMessage) {

                appointmentMessage.textContent =
                    `Thank you, ${name}. ` +
                    `Your appointment request for ` +
                    `${date} at ${time} has been received. ` +
                    `Our team will contact you at ${phone}.`;

            }


            // Console output for development

            console.log(
                "Appointment Request:",
                {
                    name: name,
                    phone: phone,
                    date: date,
                    time: time,
                    enquiry: enquiry
                }
            );


            // Reset form

            appointmentForm.reset();

        }
    );

}


// ---------------------------------------------------------
// MOBILE MENU
// ---------------------------------------------------------

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle(
                "active"
            );

        }
    );

}


// ---------------------------------------------------------
// CLOSE MOBILE MENU AFTER CLICKING LINK
// ---------------------------------------------------------

const navigationLinks =
    document.querySelectorAll(
        "#navigation a"
    );

navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navigation) {

                    navigation.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);


// ---------------------------------------------------------
// SMOOTH SCROLL
// ---------------------------------------------------------

const pageLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );

pageLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }
);