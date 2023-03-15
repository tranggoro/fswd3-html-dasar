// Inisialisasi poin
var playerScore = 0;
var computerScore = 0;

// Fungsi untuk menampilkan hasil permainan
function showResult(playerChoice, computerChoice, result) {
  alert("Pilihan Anda: " + playerChoice + "\nPilihan komputer: " + computerChoice + "\n\n" + result + "\n\nSkor Anda: " + playerScore + "\nSkor komputer: " + computerScore);
}

// Loop untuk memainkan game hingga skor maksimum tercapai
while (playerScore < 3 && computerScore < 3) {
  // Prompt untuk input pemain
  var playerChoice = prompt("Silakan pilih antara batu, gunting, atau kertas");

  // Mengecek apakah input pemain valid
  if (playerChoice !== "batu" && playerChoice !== "gunting" && playerChoice !== "kertas") {
    alert("Pilihan tidak valid! Silakan pilih antara batu, gunting, atau kertas.");
  } else {
    // Prompt untuk pilihan komputer
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "batu";
    } else if (computerChoice <= 0.67) {
      computerChoice = "gunting";
    } else {
      computerChoice = "kertas";
    }

    // Menentukan hasil permainan dan menghitung poin
    var result = "";
    if (playerChoice === computerChoice) {
      result = "Seri!";
    } else if (playerChoice === "batu") {
      if (computerChoice === "gunting") {
        result = "Anda menang!";
        playerScore++;
      } else {
        result = "Komputer menang!";
        computerScore++;
      }
    } else if (playerChoice === "gunting") {
      if (computerChoice === "kertas") {
        result = "Anda menang!";
        playerScore++;
      } else {
        result = "Komputer menang!";
        computerScore++;
      }
    } else if (playerChoice === "kertas") {
      if (computerChoice === "batu") {
        result = "Anda menang!";
        playerScore++;
      } else {
        result = "Komputer menang!";
        computerScore++;
      }
    }

    // Menampilkan hasil permainan menggunakan pop-up
    showResult(playerChoice, computerChoice, result);
  }
}

// Menampilkan hasil akhir menggunakan pop-up
if (playerScore > computerScore) {
  alert("Anda menang dengan skor " + playerScore + " - " + computerScore + "!");
} else if (playerScore < computerScore) {
  alert("Komputer menang dengan skor " + computerScore + " - " + playerScore + "!");
} else {
  alert("Seri dengan skor " + playerScore + " - " + computerScore + "!");
}