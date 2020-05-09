function getdata(name, age) {
  let myData = {
  	nama : name,
    umur : age,
    adress : "Perum Pesona Mutiara Tambun Selatan, Bekasi",
    hobbies : ["Design","Gambar"],
    is_married : 0,
    list_school :[{Nama : "SMKN 1 Tambun Utara",
    			   years_in : 2017,
                   years_out : 2020,
                   major : "Elektronika Industri"}],
    skills : [{Skill : "Design Grafis",
    	       Level : "Advanced"}],
    interest_in_coding : 0
  }
  let json = JSON.stringify(myData);
  return json;
}