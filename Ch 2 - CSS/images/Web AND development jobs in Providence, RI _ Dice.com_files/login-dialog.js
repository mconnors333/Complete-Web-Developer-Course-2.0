var jobalert, jobalertAPI = '/config/dice/api.json?path=' + encodeURIComponent('/people/jobAlerts/'+$('#code').val()),
emailRegex = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i),
passRegex = new RegExp(/^.*(?:\d.*[A-Za-z]|[A-Za-z].*\d).*$/);

$(document).ready(function() {
    /* Submitting Password on enter */
    $('#mPassword').keypress(function(e) {if(e.which == 13) {loginSubmit();}});


    if (getCookie('DJV_save')) {
        saveJob($('#saveBtn'));
        deleteCookie('DJV_save', '/');
    }

    if (getCookie('DJV_skillflag')) {
        var sN = $('#skillName').text();
        getProfiles();
        var found = $.inArray(sN, skillArray) > -1;
        if (found) {
                $('#trendingSkills').hide();
                $('#trendingSkillsXs').hide();
                $('#presentskills').show();
                $('#presentskillsXs').show();
        } else {
            $('#trendingSkills').show();
            $('#trendingSkillsXs').show();
            $('#presentskillsXs').hide();
            $('#presentskills').hide();
            addSkill();
        }
        deleteCookie('DJV_skillflag', '/');
     }

    if (getCookie('save_searchPage')) {
       var savesearchflag = getCookie('save_searchPage');
       var ressavesearch = savesearchflag.split(";");
       saveJob(ressavesearch[0]);
       deleteCookie('save_searchPage', '/');
       window.location.reload(true);
    }

    if (getCookie('save_companyPage')) {
       var savecompanyflag = getCookie('save_companyPage');
       var ressavecompany = savecompanyflag.split(";");
       saveCompanyJob(ressavecompany[0]);
       deleteCookie('save_companyPage', '/');
       window.location.reload(true);
    }

    if (getCookie('Djv_applyJob')) {
        var djvapplyflag = getCookie('Djv_applyJob');
        if(djvapplyflag) {
            var applyjob = djvapplyflag.split(";");
            sendApply(applyjob[0], applyjob[1]);
            deleteCookie('Djv_applyJob', '/');
        }
    }
});

function clearLoginModalContent() {
    $('#emailDiv').removeClass('has-error');
    $('#emailSpan').removeClass('glyphicon-remove');
    $('#passDiv').removeClass('has-error');
    $('#passSpan').removeClass('glyphicon-remove');
    $('#mEmail').val('');
    $('#mPassword').val('');
    $('#emailFeedbackMessage').hide();
    $('#passFeedbackMessage').hide();
    $('#error-alert').hide();
}

function generateCookie(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = '';
    if (vEnd) {
        switch (vEnd.constructor) {
            case Number:
                sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                break;
            case String:
                sExpires = '; expires=' + vEnd;
                break;
            case Date:
                sExpires = '; expires=' + vEnd.toUTCString();
                break;
        }
    }
    document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
    return true;
}

function getCookie(sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
}

function deleteCookie(sKey, sPath, sDomain) {
    if (!sKey) { return false; }
    document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + ( sDomain ? '; domain=' + sDomain : '') + ( sPath ? '; path=' + sPath : '');
}

function redirectURLCookie() {
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    generateCookie('DJV_UNREGISTERED', window.location.href, date, '/');
}

function saveButtjobs() {
    var save = $('#save').val();
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    generateCookie('DJV_save', save, date, '/');
}

function saveskill() {
    var skillflag = $('#skillflag').val();
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    generateCookie('DJV_skillflag', skillflag, date, '/');
}
function savesearchfun() {
     var savesearch = $('#savesearch').val();
     var date = new Date();
     date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
     generateCookie('save_searchPage', savesearch, date, '/');
 }
function savecompanyfun() {
    var savesearch = $('#savecompany').val();
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    generateCookie('save_companyPage', savesearch, date, '/');
}

function applyjobfun() {
    var domain = $('#wwwDomain').val();
    var applyURl = ';'+$('#appUrl').val();
    if (domain && applyURl) {
        var date = new Date();
        var applyjobflag = domain + applyURl ;
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        generateCookie('Djv_applyJob', applyjobflag, date, '/');
    }
}

function savetrendskill() {
    var trendskill = $('#trendskill').val();
    var date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    generateCookie('save_trendskillPage', trendskill, date, '/');
}
$('#mEmail').on('blur', function () {
    var email = $.trim($(this).val());
    if (email && emailRegex.test(email)) {
        $('#emailDiv').removeClass('has-error');
        $('#emailSpan').removeClass('glyphicon-remove');
        $('#emailFeedbackMessage').hide();
    } else if (!email || !emailRegex.test(email)) {
        $('#emailDiv').addClass('has-error');
        $('#emailSpan').addClass('glyphicon-remove');
        $('#emailFeedbackMessage').show();
    }
});

$('#mPassword').on('blur', function () {
    var pass = $.trim($(this).val());
    if (pass && passRegex.test(pass) && pass.length > 7) {
        $('#passDiv').removeClass('has-error');
        $('#passSpan').removeClass('glyphicon-remove');
        $('#passFeedbackMessage').hide();
    } else if (!pass || !passRegex.test(pass) || pass.length < 8) {
        $('#passDiv').addClass('has-error');
        $('#passSpan').addClass('glyphicon-remove');
        $('#passFeedbackMessage').show();
    }
});

var domain = $('#wwwDomain').val(), localDomain = $('#localDomain').val();
var applyURl = $('#appUrl').val();
function loginSubmit() {
    var save = $('#save').val();
    var skillflag = $('#skillflag').val();
    var savesearch = $('#savesearch').val();
    var saveCompany = $('#savecompany').val();
    var trendskill = $('#trendskill').val();
    $('#error-alert').hide();
    if ($('#mEmail').val() === '' || $('#mPassword').val() === '') {
        $('#error-alert').html('<strong>Email and/or password incorrect.</strong> Please use the <a href="http://' + localDomain +'/profman/resetPassword.jsp" target="_blank">"Forgot your password?"</a> link, or contact Dice at techsupport@dice.com.');
        $('#error-alert').show();
        return;
    }

    $('#loginLoaderImg').show();
    var url = "/jobs/seekerLogin.html",
        email = $('#mEmail').val(),
        password = $('#mPassword').val(),
        json = {
            "email" : (email) ? email.trim() : email,
            "password" : password
        },
        applyFlag = $('#signBtnId').attr('signedIn'),
        reportJobModal = $('#signBtnId').attr('reportJobModal'),
        rateJobModal = $('#signBtnId').attr('rateJobModal'),
        applyJobModal = $('#signBtnId').attr('signedInForApply'),
        newWindow = '';

    if (applyFlag) {
        newWindow = window.open();
    }

    $.ajax({
        url: url,
        data: JSON.stringify(json),
        type: "POST",
        datatype: "json",
        contentType: 'application/json',
        //async : false,
        success: function(res){
            res = JSON.parse(res);
            $('#loginLoaderImg').hide();
            if (res.message != 'User is Authenticated!') {
                if (applyFlag) {
                    newWindow.close();
                }
                $('#error-alert').html(res.message);
                $('#error-alert').show();
                return ;
            } else {
                if(res.peopleId && $('#hideButtonStatus').val() == "clicked") {
                	$('#applyModal').modal('hide');
                    setCookie('tgViewedBtn'+res.peopleId, "true" ,  24 * 60 * 60 *1, '/');
                    window.location.reload(true);
                    return;
                }
                //Setting REPORT_COOKIE true to Open Report Modal
                if (reportJobModal) {
                    setCookie('REPORT_JOB', true, 24 * 60 * 60 *1, '/');// to Open ReportJOB MODAL	
                }
              //Setting RATE_COOKIE true to Open RATE Modal
                if (rateJobModal) {
                    setCookie('RATE_JOB', true, 24 * 60 * 60 *1, '/');// to Open RATE_JOB MODAL	
                }
              //Setting APPLY_JOB true to Open APPLY_JOB Modal
                if (applyJobModal) {
                    setCookie('APPLY_JOB', true, 24 * 60 * 60 *1, '/');// to Open APPLY_JOB MODAL 
                }
                
                redirectURLCookie();
                $('#applyModal').modal('hide');
                if (applyFlag) {
                    if (applyURl.indexOf('http') == -1) {
                        applyURl = 'http://' + applyURl;
                    }
                    newWindow.location = window.location.protocol + '//' + domain + '/jobs/detail/apply/url?url=' + encodeURIComponent(applyURl);
                    applyjobfun();
                }
                if (save == 'true') {
                    saveButtjobs();
                }
                if (skillflag == 'true') {
                    saveskill();
                }
                if (savesearch) {
                    var ressavesearch = savesearch.split(";");
                    if (ressavesearch[1] == 'true') {
                        savesearchfun();
                    }
                }
                if (saveCompany) {
                    var ressavecompany = saveCompany.split(";");
                    if (ressavecompany[1] == 'true') {
                        savecompanyfun();
                    }
                }
                if (trendskill) {
                    var savetrendingskill = trendskill.split(";");
                    if (savetrendingskill[2] == 'true') {
                        savetrendskill();
                    }
                }
                window.location.reload(true);
            }
        },
        error: function(res) {
            if (applyFlag) {
                newWindow.close();
            }
            console.log("error in log-in ");
        }
    });
}