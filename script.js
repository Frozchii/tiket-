alert("selama datang di app tiket \n yang boleh masuk hanya 13 tahun katas");

const umur = prompt("masukan umur anda");

if (umur >= 14) {
    const studio = prompt("masukan studio \n studio A \n studio B \n studio C");

    if (studio == "a" || studio == "b" || studio == "c") {
        const film = prompt("pilih film \n 1 : tatang sutarman \n 2 : sleketep \n  3 : prikitiw");
        
        let namaFIlm
        if (film == 1) {
            namaFilm = "tatang sutarman";
        } else if (film ==2) {
            namaFilm = "sleketep";
        } else if (film ==3) {
            namaFilm = "prikitiw";
        }
        
        if (film == "1" || film == "2" || film=="3") {
            const nama = prompt("o namae wa nan desu ka?");
            
            alert(`berikut tiket anda \n nama : ${nama} \n umur ${umur} \n film :${namaFilm} \n studio : ${studio}`)
        } else {
            alert("maaf film tidak tersedia");
        }

    } else {
        alert("anda harus memilih studio");
    }

} else {
  
    alert("lu masih bocil");

}