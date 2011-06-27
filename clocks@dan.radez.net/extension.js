const St = imports.gi.St;
const Mainloop = imports.mainloop;

const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;

function calcTime(city, offset) {
    // pulled from here.
    // http://www.techrepublic.com/article/convert-the-local-time-to-another-time-zone-with-this-javascript/6016329
    // I know it's not the best solution, but the excersise was based more on the extension than the timezone calc

    // create Date object for current location
    d = new Date();
   
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
   
    // return time as a string
    format = "%H:%M";
    return city + ": " + nd.toLocaleFormat(format);

}

function main() {
    pune = new PopupMenu.PopupMenuItem(calcTime('Pune', '+5.5'));
    utc = new PopupMenu.PopupMenuItem(calcTime('UTC', '0'));
    Main.panel._dateMenu.menu.addActor(pune.actor);
    Main.panel._dateMenu.menu.addActor(utc.actor);
}
