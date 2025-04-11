const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');



registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.toggle('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

function index() {
    window.location.href = index.app.get('/orders', (req, res, next) => {
            if (req.headers['authorization'] === 'abc123') {
                next()
            } else {
                res.statusCode = 401;
                res.send('Not allowed')
            }
        }, (req, res) => {
            res.send('Protected route');
        }

    }