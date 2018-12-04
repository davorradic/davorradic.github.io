/* opdracht 6 */

/* Voorwaardelijke statments en programmaloop

  * */

  /*
  Casus: Je hebt object variabele data
  Uit object kun je informaties uithalen van variabele data.
  te gaan maken:
  https://www.kwekersvergelijk.nl/product/slim-kweken-maxi-kweekbak/

  Stap 1:
  lees in json file.
  TIP: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
  Stap 2:
  Loop door affiliate producten heen
  Stap 3:
  Plaats alle informaties van affiliate_details in html (voorbeeld: https://www.kwekersvergelijk.nl/product/slim-kweken-maxi-kweekbak/)

  */


  var data = {
    "products":
      {
        "product":
        {
          "product_id"              : 1,
          "category"                : "kweekkast",
          "product_name"            : "Slim kweken – Maxi kweekbak",
          "affiliate_details"       : {
                                        "1" :
                                        {
                                          "product_owner_logo_url"  : "images/Warentuin-logo.png",
                                          "product_price"           : "15,89",
                                          "shipping_costs"          : "false",
                                          "delivering"              : "1",
                                          "affiliate_link"          : "https://www.warentuin.nl/royal-well-maxi-kweekbak-40-liter-zwart?aff=12345"
                                        },
                                        "2" :
                                        {
                                          "product_owner_logo_url"  : "images/tuinexpress_logo.jpg",
                                          "product_price"           : "15,95",
                                          "shipping_costs"          : "4,95",
                                          "delivering"              : "1",
                                          "affiliate_link"          : "https://www.tuinexpress.nl/zaaikist-maxi?aff=12345"
                                        },
                                        "3" :
                                        {
                                          "product_owner_logo_url"  : "images/nubuiten-logo.png",
                                          "product_price"           : "16,59",
                                          "shipping_costs"          : "false",
                                          "delivering"              : "8",
                                          "affiliate_link"          : "https://nubuiten.nl/kweekbak-40-liter?aff=12345"
                                        },
                                        "4" :
                                        {
                                          "product_owner_logo_url"  : "images/logo-kas.png",
                                          "product_price"           : "16,59",
                                          "shipping_costs"          : "false",
                                          "delivering"              : "5",
                                          "affiliate_link"          : "https://www.kas-expert.nl/slim-kweken-maxi-kweekbak/111219?aff=12345"
                                        }
          }

        }

      }

  };
  //zie hoe data in console.log eruit ziet.
  console.log(data);
  //zie hoe data.products in console.log eruit ziet.
  console.log(data.products);
  //zie hoe data.products.product in console.log eruit ziet.
  console.log(data.products.product);
  //zie hoe data.products.product.affiliate_details in console.log eruit ziet.
  console.log(data.products.product.affiliate_details);

  //nu willen we datas doorlopen om inf van affiliate informaties uit te printen
  var affiliate_data = data.products.product.affiliate_details;
  var print_data = '';
  for(var aff in data.products.product.affiliate_details ){
    console.log(affiliate_data[aff].product_owner_logo_url);
    console.log(affiliate_data[aff].product_price);
    console.log(affiliate_data[aff].shipping_costs);
    console.log(affiliate_data[aff].affiliate_link);
    //Nu is het tijd om alle info die we hier hebben in
    //tabel te plaatsen
    //Stap 1: plaats alle data eerst in variabele print_data
    print_data += '<tr>';
    print_data += '<td><img src="' + affiliate_data[aff].product_owner_logo_url + '" /></td>';
    print_data += '<td>' + affiliate_data[aff].product_price + '</td>';
    print_data += '<td>' + affiliate_data[aff].delivering + '</td>';
    //opdracht: in plaats van delivering false te printen, laat zien onbekend.
    //google naar inline if else statments
    print_data += '<td>' + affiliate_data[aff].shipping_costs + '</td>';
    print_data += '<td><span class="link" data="' + affiliate_data[aff].affiliate_link + '" onclick="hidelinksfromgoogle(\'' + affiliate_data[aff].affiliate_link + '\');return false;">bestel nu</span></td>';
    print_data += '</tr>';
  }
  //console.log(print_data);
  //nu hebben we html, nu nog bij de table plakken, zie voorbeeld
  // op https://stackoverflow.com/questions/584751/inserting-html-into-a-div

  document.getElementById('affliate_results').innerHTML = print_data;


  function hidelinksfromgoogle(affiliate_link){
    console.log(affiliate_link);
    window.open(affiliate_link, '_self');
  }
