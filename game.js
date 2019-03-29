
var game = {
    choise: [
        "Qayci", "Dash", "Kagiz"
    ],
    // for statistics
    count: 0,
    winner_count: 0,
    lose_count: 0,
    equal_count: 0,
    game_text: document.getElementById("gametext"),
    elements: document.getElementById("elements"),
    start_button: document.getElementsByClassName("start-button")[0],
    game_count_html: document.getElementById("game_count"),
    win_count_html: document.getElementById("win_count"),
    lose_count_html: document.getElementById("lose_count"),
    equal_count_html: document.getElementById("equal_count"),
    game_status: "start",
    action: function(element) {
        // pass
        var mychoise = element.innerText;
        var computer_choice = this.computer_make_choise();
        var result = this.compare_choise(computer_choice, mychoise);
        this.statistics(result);
        this.update_scoreboard();
        this.game_text.innerHTML = result;
        this.elements.style.display = "none";
        this.start_button.style.display = "block";
    },
    play_again : function () {
        this.game_text.innerHTML  = "Zehmet olmasa birini secin!" ;
        this.elements.style.display = "flex";
        this.start_button.style.display = "none";
    },
    update_scoreboard: function() {
        this.game_count_html.innerHTML = this.count;
        this.win_count_html.innerHTML = this.winner_count;
        this.lose_count_html.innerHTML = this.lose_count;
        this.equal_count_html.innerHTML = this.equal_count;
    },
    statistics: function(result) {
        this.count ++; 
        if (result === "Computer win !") {
            // you lose
            this.lose_count ++;
        }
        else if (result === "You win !") {
            // you win
            this.winner_count ++;
        }
        else {
            // equal
            this.equal_count ++;
        }
    },
    compare_choise: function(choise1, choise2){
        var choise_list = [choise1, choise2];
        if (choise_list.includes("Qayci") && choise_list.includes("Kagiz")) {
            if (choise_list[0] === "Qayci") {
                return "Computer win !";
            }
            else {
                return "You win !";
            }
        }
        else if (choise_list.includes("Dash") && choise_list.includes("Qayci")) {
            if (choise_list[0] === "Dash") {
                return "Computer win !";
            }
            else {
                return "You win !";
            }
        }
        else if (choise_list.includes("Kagiz") && choise_list.includes("Dash")) {
            if (choise_list[0] === "Kagiz") {
                return "Computer win !";
            }
            else {
                return "You win !";
            }
        }
        else if (choise1 == choise2) {
            // equal
            return "Equals"
        }
    },
    computer_make_choise: function() {
        return this.choise[Math.ceil(Math.random() * this.choise.length) - 1];
    }
};