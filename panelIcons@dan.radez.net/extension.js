const St = imports.gi.St;
const Mainloop = imports.mainloop;

const Main = imports.ui.main;

const Panel = imports.ui.panel;
const StatusIconDispatcher = imports.ui.statusIconDispatcher;

function main() {
    // pulled from
    // http://blog.fpmurphy.com/2011/05/more-gnome-shell-customization.html
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['gnote'] = 'gnote';
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['empathy'] = 'empathy';	 
}

