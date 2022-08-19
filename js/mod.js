(() =>{
    document
    .querySelector(".js-speaker-from")
    .addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
    console.log(`${name}: ${value}`)
    );


    });

    document.querySelector(".comment").addEventListener("input", (e) => {
        console.log(e.target.value);
        if (e.target.value !== "") {
        document.querySelector(".from-btn").removeAttribute("disabled");
        } else {
            document.querySelector(".from-btn").setAttribute("disabled", true);
        }
    });
    })();