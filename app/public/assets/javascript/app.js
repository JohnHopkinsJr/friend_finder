function displayError(index, message) {
    const element = $(`form > div:nth-of-type(${index})`);

    element.addClass("has-danger");
    element.find(".form-control-feedback").text(message);
}

$("form").children(".form-group").on("change", function(event) {
    $(this).removeClass("has-danger");
    $(this).find(".form-control-feedback").empty();
});

$("#button_submit").click(event => {
    event.preventDefault();

    const name      = $("#name").val().trim();
    const photo_url = $("#photo_url").val().trim();
    const answers   = [];

    const numInputs   = $("form").children(".form-group").length;
    let   index_error = numInputs + 1;

    if (name === "") {
        displayError(1, "Please provide your name.");
        index_error = Math.min(index_error, 1);
    }

    if (photo_url === "") {
        displayError(2, "Please provide your photo.");
        index_error = Math.min(index_error, 2);
    }

    for (let i = 0; i < 10; i++) {
        const answer = $(`#q${i}`).val();
        answers.push(answer);

        if (!answer) {
            displayError(3 + i, "Please answer this question.");
            index_error = Math.min(index_error, 3 + i);
        }
    }

    $("html, body").animate({"scrollTop": $(`form > div:nth-of-type(${index_error})`).offset().top}, "slow");

    if (index_error === numInputs + 1) {
        const data = {name, photo_url, answers};

        $.post("/api/friends", data).then(response => {
            const friend_number = `(${Math.random().toString().slice(2, 5)}) ${Math.random().toString().slice(2, 5)}-${Math.random().toString().slice(2, 6)}`;

            $("#my_name").text(response.my_name);
            $("#friend_name").text(response.friend_name);
            $("#friend_number").text(friend_number);

            $("#friend_photo").attr("src", response.friend_photo_url);
            $("#friend_photo").css("display", (response.friend_photo_url !== "") ? "block" : "none");

            $("#modal_response").modal();

            $("#modal_response").on("hidden.bs.modal", event => {
                window.location = "/importance";
            });
        });
    }
});