$('#button2').click(function () {
  $("#tab1").removeClass('ok');
  $("#tab2").removeClass('ok');
  $("#tab2").removeClass('active');
  $("#tab1").addClass('active');
  $('.tabs_content1').addClass('active');
  $('.tabs_content2').removeClass('active');
});

$('#button4').click(function () {
  $("#tab2").removeClass('ok');
  $("#tab3").removeClass('active');
  $("#tab2").addClass('active');
  $('.tabs_content1').removeClass('active');
  $('.tabs_content2').addClass('active');
  $('.tabs_content3').removeClass('active');
});
$('select').each(function () {
  var $this = $(this),
    selectOption = $this.find('option'),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(':selected'),
    dur = 500;
  var reload = false;
  if ($(this).hasClass('onchange')) reload = true;
  $this.css({
    position: 'absolute',
    opacity: 0,
    visibility: 'hidden'
  });

  $this.wrap('<div class="select"></div>');

  $('<div>', {
    class: 'select__gap',
    text: selectedOption.eq(0).text()
  }).insertAfter($this);
  var selectGap = $this.next('.select__gap'),
    caret = selectGap.find('.caret');

  $('<div>', {
    class: 'select__bg',
  }).insertAfter(selectGap);
  var selectBg = selectGap.next('.select__bg');
  $('<ul>', {
    class: 'select__list'
  }).insertAfter(selectBg);
  var selectList = selectBg.next('.select__list');
  for (var i = 1; i < selectOptionLength; i++) {
    if (!$(this).hasClass('pag')) {

      $('<li>', {
        class: 'select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
    else {
      $('<li>', {
        class: 'select__item',
        html: $('<a>', {
          text: selectOption.eq(i).text()
        }).attr('href', selectOption.eq(i).val())
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }
  }
  var selectItem = selectList.find('li');
  selectGap.on('click', function () {
    if (!$(this).hasClass('on')) {
      $(this).addClass('on');
      $(this).parent().addClass('on');
      $('.select__list').css('display', 'block');
      var height = $('.select__list').height();
      $('.select__bg').css('top', -height - 15);
      $('.select__list').css('display', 'none');
      $('.select__list').show(300);
      selectItem.on('click', function () {
        var chooseItem = $(this).data('value');
        if (reload) location = chooseItem;
        $('select').val(chooseItem).attr('selected', 'selected');
        selectGap.text($(this).find('span').text());

        selectGap.removeClass('on');
        $('.select__bg').removeAttr('style');
        $('.select__list').hide();
        $(this).parent().parent().removeClass('on');
      });
    } else {
      $(this).removeClass('on');
      $(this).parent().removeClass('on');
      $('.select__bg').removeAttr('style');
      $('.select__list').hide();
    }
  });
});

//////////////////////////////////Validate//////////////////

let form = $('#form-signup');
$('#subm_but').attr('disabled', 'disabled');
$('#button3').attr('disabled', 'disabled');

$('.fa-eye').on('click', function () {
  $(this).toggleClass("fa-eye-slash");
  var type = $("#password").attr("type");
  if (type == "text") { $("#password").attr("type", "password"); }
  else { $("#password").attr("type", "text"); }
});

////////////////////////validation functions//////////////////////

function isEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return regex.test(email);
}

function isPassword(password) {
  var regex = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8}$/i;
  return regex.test(password);
}

function isLetter(name) {
  var regex = /^[a-zA-Zа-яёА-ЯЁ]*$/i;
  return regex.test(name);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


//////////////////////////remove errors //////////////////////////
$('input[name=email]').keyup(function () {
  $('.error_email').remove();
});
$('#password').keyup(function () {
  $('.error_password').remove();
});
$('input[name=password1]').keyup(function () {
  $('.error_password1').remove();
});
$('input[name=name]').keyup(function () {
  $('.error_name').remove();
  $('.error_name1').remove();
});
$('input[name=country]').keyup(function () {
  $('.error_country').remove();
  $('.error_country1').remove();
});
$(".select__item").on('click', function () {
  $('.error_type').remove();
});
$('input[name=contact_info]').keyup(function () {
  $('.error_contact_info').remove();
});
$('input[name=heard_about]').keyup(function () {
  $('.error_heard_about').remove();
});
$('input[name=i_agree]').on('click', function () {
  $('.error_i_agree').remove();
});
///////////////////////////////validate step1/////////////////////////////////////

var email, password, confirmPassword, name, country, address, im_type, contact_info, company_name, url;
var m_verticals, m_traffic, m_geo, m_verticals_name, m_verticals_val, m_traffic_name, m_traffic_val, m_geo_name, m_geo_val, other_verticals, cpa_networks, other_traffic, other_geo;
var selected_m_verticals = [];
var selected_m_traffic = [];
var selected_m_geo = [];
var heard_about, promo_code, i_want_email, i_agree;


$('#button1').on('click', function () {



  $('.error_password1').remove();
  $('.error_password').remove();
  $('.error_email').remove();
  $('.error_name').remove();
  $('.error_name1').remove();
  $('.error_country').remove();
  $('.error_type').remove();
  $('.error_contact_info').remove();

  email = $("input[name=email]").val();
  password = $("#password").val();
  confirmPassword = $("input[name=password1]").val();
  name = $("input[name=name]").val();
  country = $("input[name=country]").val();
  address = $("input[name=address]").val();
  im_type = $("#imType option:selected").val();
  contact_info = $("input[name=contact_info]").val();
  company_name = $("input[name=company_name]").val();
  url = $("input[name=url]").val();


  if (!isEmail(email)) {
    $('input[name=email]').after('<div class="error error_email">Please enter a valid email address</div>');
  }
  if (!isPassword(password)) {
    $('#password').after('<div class="error error_password">The password must contain lower and upper letters, numbers and least 8 characters.</div>');
  }

  if (password != confirmPassword) {
    $('input[name=password1]').after('<div class="error error_password1">Passwords does not match</div>');
  }
  if (!name) {
    $('input[name=name]').after('<div class="error error_name"> This field is required</div>');
  }
  if (!isLetter(name)) {
    $('input[name=name]').after('<div class="error error_name1">This field must contain only letters</div>');
  }
  if (!country) {
    $('input[name=country]').after('<div class="error error_country"> This field is required</div>');
  }
  if (!isLetter(country)) {
    $('input[name=country]').after('<div class="error error_country1">This field must contain only letters</div>');
  }

  if (im_type === '') {
    $('#imType').after('<div class="error error_type"> This field is required</div>');
  }

  if (contact_info === '') {
    $('input[name=contact_info]').after('<div class="error error_contact_info"> This field is required</div>');
  }
  if (isEmail(email) === true && isPassword(password) === true && password === confirmPassword && isLetter(name) === true && name && isLetter(country) === true && country && im_type && contact_info) {
    $("#tab1").addClass('ok');
    $("#tab2").addClass('active');
    $("#tab1").removeClass('active');
    $('.tabs_content1').removeClass('active');
    $('.tabs_content2').addClass('active');
    $('.tabs_content3').removeClass('active');
    $('#button3').removeAttr('disabled');
  }
});

$('#button3').on('click', function () {
  other_verticals = $("input[name=other_verticals]").val();
  cpa_networks = $("input[name=cpa_networks]").val();
  other_traffic = $("input[name=other_traffic]").val();
  other_geo = $("input[name=other_geo]").val();

  m_verticals = document.querySelectorAll('.verticals_group')
  m_traffic = document.querySelectorAll('.traffic_group')
  m_geo = document.querySelectorAll('.geo_group')


  $(".verticals_group:checked").each(function () {
    var item = {};
    item.name = $(this).attr("name");
    item.value = $(this).val();
    selected_m_verticals.push(item);

  });
  $(".traffic_group:checked").each(function () {
    var item = {};
    item.name = $(this).attr("name");
    item.value = $(this).val();
    selected_m_traffic.push(item);

  });
  $(".geo_group:checked").each(function () {
    var item = {};
    item.name = $(this).attr("name");
    item.value = $(this).val();
    selected_m_geo.push(item);

  });


  if (checkBoxes(m_verticals) === true && checkBoxes(m_traffic) === true && checkBoxes(m_geo) === true) {
    $("#tab2").addClass('ok');
    $("#tab3").addClass('active');
    $("#tab2").removeClass('active');
    $('.tabs_content1').removeClass('active');
    $('.tabs_content2').removeClass('active');
    $('.tabs_content3').addClass('active');
    $('#subm_but').removeAttr('disabled');
  }
});

$('#subm_but').on('click', function (event) {

  $('.error_heard_about').remove();
  $('.error_i_agree').remove();

  heard_about = $("input[name=heard_about]").val();
  promo_code = $("input[name=promo_code]").val();
  i_want_email = $('input[name=i_want_email]').is(":checked");
  i_agree = $('input[name=i_agree]').is(":checked");

  if (!heard_about) {
    $('input[name=heard_about]').after('<div class="error error_heard_about"> This field is required</div>');
  }

  if (!i_agree) {
    $('input[name=i_agree]').after('<div class="error error_i_agree"> This field is required</div>');
  }


  if (heard_about && i_agree === true) {

    var form = document.createElement("form");
    form.id = "form-signup";

    var email_input = document.createElement("input");
    email_input.value = email;
    email_input.name = "email";
    form.appendChild(email_input);

    var password_input = document.createElement("input");
    password_input.value = password;
    password_input.name = "password";
    form.appendChild(password_input);

    var confirmPassword_input = document.createElement("input");
    confirmPassword_input.value = confirmPassword;
    confirmPassword_input.name = "password1";
    form.appendChild(confirmPassword_input);

    var name_input = document.createElement("input");
    name_input.value = name;
    name_input.name = "name";
    form.appendChild(name_input);

    var country_input = document.createElement("input");
    country_input.value = country;
    country_input.name = "country";
    form.appendChild(country_input);

    var address_input = document.createElement("input");
    address_input.value = address;
    address_input.name = "address";
    form.appendChild(address_input);

    var im_type_input = document.createElement("input");
    im_type_input.value = im_type;
    im_type_input.name = "im_type";
    form.appendChild(im_type_input);


    var contact_info_input = document.createElement("input");
    contact_info_input.value = contact_info;
    contact_info_input.name = "contact_info";
    form.appendChild(contact_info_input);

    var company_name_input = document.createElement("input");
    company_name_input.value = company_name;
    company_name_input.name = "company_name";
    form.appendChild(company_name_input);

    var url_input = document.createElement("input");
    url_input.value = url;
    url_input.name = "url";
    form.appendChild(url_input);

    var other_verticals_input = document.createElement("input");
    other_verticals_input.value = other_verticals;
    other_verticals_input.name = "other_verticals";
    form.appendChild(other_verticals_input);

    var cpa_networks_input = document.createElement("input");
    cpa_networks_input.value = cpa_networks;
    cpa_networks_input.name = "cpa_networks";
    form.appendChild(cpa_networks_input);

    var other_traffic_input = document.createElement("input");
    other_traffic_input.value = other_traffic;
    other_traffic_input.name = "other_traffic";
    form.appendChild(other_traffic_input);

    var other_geo_input = document.createElement("input");
    other_geo_input.value = other_geo;
    other_geo_input.name = "other_geo";
    form.appendChild(other_geo_input);

    var heard_about_input = document.createElement("input");
    heard_about_input.value = heard_about;
    heard_about_input.name = "heard_about";
    form.appendChild(heard_about_input);

    var promo_code_input = document.createElement("input");
    promo_code_input.value = promo_code;
    promo_code_input.name = "promo_code";
    form.appendChild(promo_code_input);

    var i_want_email_input = document.createElement("input");
    i_want_email_input.value = i_want_email;
    i_want_email_input.name = "i_want_email";
    form.appendChild(i_want_email_input);

    var i_agree_input = document.createElement("input");
    i_agree_input.value = i_agree;
    i_agree_input.name = "i_agree";
    form.appendChild(i_agree_input);

    for (var key in selected_m_verticals) {
      m_verticals_name = selected_m_verticals[key].name;
      m_verticals_val = selected_m_verticals[key].value;
      var m_verticals_input = document.createElement("input");
      m_verticals_input.value = m_verticals_val;
      m_verticals_input.name = m_verticals_name;
      form.appendChild(m_verticals_input);
    }

    for (var key in selected_m_traffic) {
      m_traffic_name = selected_m_traffic[key].name;
      m_traffic_val = selected_m_traffic[key].value;
      var m_traffic_input = document.createElement("input");
      m_traffic_input.value = m_traffic_val;
      m_traffic_input.name = m_traffic_name;
      form.appendChild(m_traffic_input);
    }
    for (var key in selected_m_geo) {
      m_geo_name = selected_m_geo[key].name;
      m_geo_val = selected_m_geo[key].value;
      var m_geo_input = document.createElement("input");
      m_geo_input.value = m_geo_val;
      m_geo_input.name = m_geo_name;
      form.appendChild(m_geo_input);

    }

    var csrfmiddlewaretoken = document.createElement("input");
    csrfmiddlewaretoken.type = "hidden";
    csrfmiddlewaretoken.value = getCookie('csrftoken');
    csrfmiddlewaretoken.name = "csrfmiddlewaretoken";
    form.appendChild(csrfmiddlewaretoken);


    form.method = "POST";
    form.action = "#";
    document.body.appendChild(form);
    form.submit();

  }
});


function checkBoxes(list) {

  for (let i = 0; i < list.length; i++) {
    if (list[i].checked) {
      return true
    }
  }
  return false
}


function clsAlphaNoOnly(e) {
  var regex = new RegExp("^[a-zA-Z0-9 ]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (regex.test(str)) {
    return true;
  }
  e.preventDefault();
  return false;
}


var myButton1 = document.querySelector("#button1");
var myButton3 = document.querySelector("#button3");
var myButton4 = document.querySelector("#subm_but");

$(window).keypress(function (event) {
  if ((event.keyCode == 13) && ($('.tabs_content1').hasClass('active'))) {
    myButton1.click();
    return false;
  }
  if ((event.keyCode == 13) && ($('.tabs_content2').hasClass('active'))) {
    myButton3.click();
    return false;
  }

  if ((event.keyCode == 13) && ($('.tabs_content3').hasClass('active'))) {
    myButton4.click();
    return false;
  }
});