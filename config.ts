import token from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Fomalgaut Launcher',
};

export const api = {
    ws: 'ws://107.161.154.167:9274/ws',
    web: 'http://107.161.154.167:9274',
    extraToken: token,
};

export const appPath = '.Fomalgaut-launcher';
