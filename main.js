const {app, BrowserWindow} = require('electron');

let win;
function createWindow (){
    win = new BrowserWindow({
        height: 600,
        width:600,
        backgroundColor:'#ffffff'
    })
    win.loadURL(`file://${__dirname}/dist/Onee/index.html`)
    win.on('closed',function(){
        win=null;
    })
}

app.on('ready',createWindow)

app.on('windows-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
})
app.on('activate',function(){
    if(win==null){
        createWindow()
    }
})
