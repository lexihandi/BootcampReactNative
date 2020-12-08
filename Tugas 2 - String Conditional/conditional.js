//nomer 1
var nama = "lexy";
var peran = "Werewolf";

if (nama == "") {
  console.log("Nama harus diisi!");
} else if (nama == "" || peran == "Penyihir") {
  console.log(
    `Selamat datang di Dunia Werewolf, ${nama} \nHalo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf`
  );
} else if (nama == "" || peran == "Guard") {
  console.log(
    `Selamat datang di Dunia Werewolf, ${nama} \nHalo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`
  );
} else if (nama == "" || peran == "Werewolf") {
  console.log(
    `Selamat datang di Dunia Werewolf, ${nama} \nHalo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`
  );
} else {
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}
console.log('\n')

//nomer 2
var hari = 17;
var bulan = 8;
var tahun = 1945;

switch (bulan) {
  case 1: {
    console.log(`${hari} Januari ${tahun}`);
    break;
  }
  case 2: {
    console.log(`${hari} Februari ${tahun}`);
    break;
  }
  case 3: {
    console.log(`${hari} Maret ${tahun}`);
    break;
  }
  case 4: {
    console.log(`${hari} April ${tahun}`);
    break;
  }
  case 5: {
    console.log(`${hari} Mei ${tahun}`);
    break;
  }
  case 6: {
    console.log(`${hari} Juni ${tahun}`);
    break;
  }
  case 7: {
    console.log(`${hari} Juli ${tahun}`);
    break;
  }
  case 8: {
    console.log(`${hari} Agustus ${tahun}`);
    break;
  }
  case 9: {
    console.log(`${hari} September ${tahun}`);
    break;
  }
  case 10: {
    console.log(`${hari} Oktober ${tahun}`);
    break;
  }
  case 11: {
    console.log(`${hari} November ${tahun}`);
    break;
  }
  case 12: {
    console.log(`${hari} Desember ${tahun}`);
    break;
  }
  default: {
    console.log("Pilih bulan");
  }
}
