$(function () {

    $.getJSON('classes.json').done(function (jsData) {
        console.log('hello');
        for (i = 0; i < jsData.classes.length; i++)

            insertCls(jsData.classes[i]);

    }).fail(function () {
        console.log('wtf');
    });
    //IT KEEPS HANGING UP HERE


    /// Put button Functions here



});

//pass out because family dinner yayyyyy. THe buttons still break everything. Night

//Insters the json into the html string
function insertCls(clsdata) {
    var jsondat = '';
    var i;
    // Adds the Name
    jsondat += '<h2>' + clsdata.name + '</h2>';

    // Adds the image
    jsondat += '<img src=' + clsdata.image + '>';

    //Adds the Summary
    jsondat += '<br><h2>Summary</h2><button type="button" id="sumbtn-' + clsdata.id + '">Toggle</button><div id="summ-' + clsdata.id + '">' + clsdata.description + '</div></br>';

    // Adds the Details Section
    jsondat += '<h2>Details</h2><button type="button" id="deetbtn-' + clsdata.id + '">Toggle</button><div id="deets-' + clsdata.id + '"><p>Role:' + clsdata.role + '</p>';
    jsondat += '<p>Main Method Of Attack:' + clsdata.mmoa + '</p>';
    jsondat += '<p>Spells and Abillities: ' + clsdata.sa + '</p>';

    jsondat += '<p>Perks:' + clsdata.perks + '</p>';
    jsondat += '<p>Avoid: ' + clsdata.avoid + '</p>';
    jsondat += '<p>Backgrounds:</p>';
    // Adds the list via loop
    jsondat += '<ul>' + makelist(clsdata.backgr) + '</ul>< /div>';

    // List Loop Fucntion
    function makelist(list) {
        var listdat = "";
        for (var i = 0; i < list.length; i++) {

            listdat += '<li>' + list[i] + '</li>';

        }
        return listdat
    }

    jsondat += '</div>';
    // Appends Everything in Json Dat variable
    $('#Main').append(jsondat);
    // Initial hiding of items. 
    $('#deets-' + clsdata.id).hide();
    $('#summ-' + clsdata.id).hide();
    ///Button Controls 


    ///Button for summary
    $('#sumbtn-' + clsdata.id).on('click', function () {
        $(this).next().toggle();

    });

    ///buttons for details 
    $('#deetbtn-' + clsdata.id).on('click', function () {
        $(this).next().toggle();
    });
}
/// IT ALL DONE








/*$('#sumbtn').on('click',function()

$(this).children('#summ').toggle();
    
)
$('#deetbtn').on('click', function()
$(this).children('#deets').toggle();
)
 

}); */