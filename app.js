import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDataTable} from '@material/data-table';
import {MDCTextField} from '@material/textfield';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MDCMenu} from '@material/menu';



const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
console.log('hello world');