const plateEl = document.querySelector(".menuPlate")
const storeMenuEl = document.querySelector(".storeMenu")
const macMenuEl = document.querySelector(".macMenu")
const ipadMenuEl = document.querySelector(".ipadMenu")
const iphoneMenuEl = document.querySelector(".iphoneMenu")
const watchMenuEl = document.querySelector(".watchMenu")
const airpodsMenuEl = document.querySelector(".airpodsMenu")
const homeMenuEl = document.querySelector(".homeMenu")
const entertainmentMenuEl = document.querySelector(".entertainmentMenu")
const accessoriesMenuEl = document.querySelector(".accessoriesMenu")
const supportMenuEl = document.querySelector(".supportMenu")
const backdropEl = document.querySelector(".backdrop")
const searchEl = document.querySelector(".search")
const purchaseEl = document.querySelector(".purchase")

function hoverBackDrop() {
    backdropEl.style.top = "43px"
    backdropEl.style.height = "calc( 100vh - 43px )"
}

function unHoverBackDrop() {
    backdropEl.style.height = "0px"
}

function refresh() {
    storeMenuEl.style.opacity = "0";
    storeMenuEl.style.visibility = "hidden";
    macMenuEl.style.opacity = "0";
    macMenuEl.style.visibility = "hidden";
    ipadMenuEl.style.opacity = "0";
    ipadMenuEl.style.visibility = "hidden";
    iphoneMenuEl.style.opacity = "0";
    iphoneMenuEl.style.visibility = "hidden";
    watchMenuEl.style.opacity = "0";
    watchMenuEl.style.visibility = "hidden";
    airpodsMenuEl.style.opacity = "0";
    airpodsMenuEl.style.visibility = "hidden";
    homeMenuEl.style.opacity = "0";
    homeMenuEl.style.visibility = "hidden";
    entertainmentMenuEl.style.opacity = "0";
    entertainmentMenuEl.style.visibility = "hidden";
    accessoriesMenuEl.style.opacity = "0";
    accessoriesMenuEl.style.visibility = "hidden";
    supportMenuEl.style.opacity = "0";
    supportMenuEl.style.visibility = "hidden";
}

function unHover() {
    plateEl.style.height="0px";
    refresh()
}

function hover1() {
    plateEl.style.height="373px";
    refresh()
    storeMenuEl.style.opacity = "1";
    storeMenuEl.style.visibility = "visible";
}

function hover2() {
    plateEl.style.height="510px";
    refresh()
    macMenuEl.style.opacity = "1";
    macMenuEl.style.visibility = "visible";
}

function hover3() {
    plateEl.style.height="470px";
    refresh()
    ipadMenuEl.style.opacity = "1";
    ipadMenuEl.style.visibility = "visible";
}

function hover4() {
    plateEl.style.height="435px";
    refresh()
    iphoneMenuEl.style.opacity = "1";
    iphoneMenuEl.style.visibility = "visible";
}

function hover5() {
    plateEl.style.height="435px";
    refresh()
    watchMenuEl.style.opacity = "1";
    watchMenuEl.style.visibility = "visible";
}

function hover6() {
    plateEl.style.height="370px";
    refresh()
    airpodsMenuEl.style.opacity = "1";
    airpodsMenuEl.style.visibility = "visible";
}

function hover7() {
    plateEl.style.height="340px";
    refresh()
    homeMenuEl.style.opacity = "1";
    homeMenuEl.style.visibility = "visible";
}

function hover8() {
    plateEl.style.height="525px";
    refresh()
    entertainmentMenuEl.style.opacity = "1";
    entertainmentMenuEl.style.visibility = "visible";
}

function hover9() {
    plateEl.style.height="410px";
    refresh()
    accessoriesMenuEl.style.opacity = "1";
    accessoriesMenuEl.style.visibility = "visible";
}

function hover10() {
    plateEl.style.height="450px";
    refresh()
    supportMenuEl.style.opacity = "1";
    supportMenuEl.style.visibility = "visible";
}


function openSearch() {
    searchEl.style.height = "350px";
}

function closeSearch() {
    searchEl.style.height = "0px";
}

function openPurchase() {
    purchaseEl.style.height = "370px";
}

function closePurchase() {
    purchaseEl.style.height = "0px";
}

let open_1 = false
let open_2 = false
let open_3 = false
let open_4 = false
let open_5 = false
let open_6 = false
let open_7 = false
let open_8 = false
let open_9 = false
let open_10 = false
let open_11 = false

const sub_1 = document.querySelector(".sub-1")
const sub_2 = document.querySelector(".sub-2")
const sub_3 = document.querySelector(".sub-3")
const sub_4 = document.querySelector(".sub-4")
const sub_5 = document.querySelector(".sub-5")
const sub_6 = document.querySelector(".sub-6")
const sub_7 = document.querySelector(".sub-7")
const sub_8 = document.querySelector(".sub-8")
const sub_9 = document.querySelector(".sub-9")
const sub_10 = document.querySelector(".sub-10")
const sub_11 = document.querySelector(".sub-11")

const plus_1 = document.getElementById("plus-1")
const plus_2 = document.getElementById("plus-2")
const plus_3 = document.getElementById("plus-3")
const plus_4 = document.getElementById("plus-4")
const plus_5 = document.getElementById("plus-5")
const plus_6 = document.getElementById("plus-6")
const plus_7 = document.getElementById("plus-7")
const plus_8 = document.getElementById("plus-8")
const plus_9 = document.getElementById("plus-9")
const plus_10 = document.getElementById("plus-10")
const plus_11 = document.getElementById("plus-11")

function open1(x) {
    if ( open_1 === false ) {
        sub_1.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_1.style.transform = "rotate(45deg)"
    } else {
        sub_1.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_1.style.transform = "rotate(0deg)"
    }
    open_1 = !open_1
}

function open2(x) {
    if ( open_2 === false ) {
        sub_2.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_2.style.transform = "rotate(45deg)"
    } else {
        sub_2.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_2.style.transform = "rotate(0deg)"
    }
    open_2 = !open_2
}

function open3(x) {
    if ( open_3 === false ) {
        sub_3.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_3.style.transform = "rotate(45deg)"
    } else {
        sub_3.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_3.style.transform = "rotate(0deg)"
    }
    open_3 = !open_3
}

function open4(x) {
    if ( open_4 === false ) {
        sub_4.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_4.style.transform = "rotate(45deg)"
    } else {
        sub_4.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_4.style.transform = "rotate(0deg)"
    }
    open_4 = !open_4
}

function open5(x) {
    if ( open_5 === false ) {
        sub_5.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_5.style.transform = "rotate(45deg)"
    } else {
        sub_5.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_5.style.transform = "rotate(0deg)"
    }
    open_5 = !open_5
}

function open6(x) {
    if ( open_6 === false ) {
        sub_6.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_6.style.transform = "rotate(45deg)"
    } else {
        sub_6.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_6.style.transform = "rotate(0deg)"
    }
    open_6 = !open_6
}

function open7(x) {
    if ( open_7 === false ) {
        sub_7.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_7.style.transform = "rotate(45deg)"
    } else {
        sub_7.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_7.style.transform = "rotate(0deg)"
    }
    open_7 = !open_7
}

function open8(x) {
    if ( open_8 === false ) {
        sub_8.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_8.style.transform = "rotate(45deg)"
    } else {
        sub_8.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_8.style.transform = "rotate(0deg)"
    }
    open_8 = !open_8
}

function open9(x) {
    if ( open_9 === false ) {
        sub_9.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_9.style.transform = "rotate(45deg)"
    } else {
        sub_9.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_9.style.transform = "rotate(0deg)"
    }
    open_9 = !open_9
}

function open10(x) {
    if ( open_10 === false ) {
        sub_10.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_10.style.transform = "rotate(45deg)"
    } else {
        sub_10.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_10.style.transform = "rotate(0deg)"
    }
    open_10 = !open_10
}

function open11(x) {
    if ( open_11 === false ) {
        sub_11.style.display = "block";
        x.style.border = "2px solid #62adf9"
        x.style.borderTop = "4px solid #62adf9"
        x.style.borderBottom = "4px solid #62adf9"
        plus_11.style.transform = "rotate(45deg)"
    } else {
        sub_11.style.display = "none";
        x.style.border = "none"
        x.style.borderBottom = "1px solid #d2d2d7"
        plus_11.style.transform = "rotate(0deg)"
    }
    open_11 = !open_11
}

const searchSmallEl = document.querySelector(".searchSmall")
const ssmal_0 = document.getElementById("searchSmall-0")
const ssmal_1 = document.getElementById("searchSmall-1")
const ssmal_2 = document.getElementById("searchSmall-2")
const ssmal_3 = document.getElementById("searchSmall-3")
const ssmal_4 = document.getElementById("searchSmall-4")
const ssmal_5 = document.getElementById("searchSmall-5")
const ssmal_6 = document.getElementById("searchSmall-6")
const ssmal_7 = document.getElementById("searchSmall-7")
const ssmal_8 = document.getElementById("searchSmall-8")

function openSmallSearch() {
    searchSmallEl.style.height = "100vh"
    ssmal_0.style.opacity = "1"
    ssmal_1.style.opacity = "1"
    ssmal_2.style.opacity = "1"
    ssmal_3.style.opacity = "1"
    ssmal_4.style.opacity = "1"
    ssmal_5.style.opacity = "1"
    ssmal_6.style.opacity = "1"
    ssmal_7.style.opacity = "1"
    ssmal_8.style.opacity = "1"
    ssmal_1.style.top = "65px"
    ssmal_2.style.top = "60px"
    ssmal_3.style.top = "143px"
    ssmal_4.style.top = "180px"
    ssmal_5.style.top = "220px"
    ssmal_6.style.top = "260px"
    ssmal_7.style.top = "300px"
    ssmal_8.style.top = "340px"
}

function closeSmallSearch() {
    searchSmallEl.style.height = "0px"
    ssmal_0.style.opacity = "0"
    ssmal_1.style.opacity = "0"
    ssmal_2.style.opacity = "0"
    ssmal_3.style.opacity = "0"
    ssmal_4.style.opacity = "0"
    ssmal_5.style.opacity = "0"
    ssmal_6.style.opacity = "0"
    ssmal_7.style.opacity = "0"
    ssmal_8.style.opacity = "0"
    ssmal_1.style.top = "15px"
    ssmal_2.style.top = "10px"
    ssmal_3.style.top = "93px"
    ssmal_4.style.top = "160px"
    ssmal_5.style.top = "200px"
    ssmal_6.style.top = "240px"
    ssmal_7.style.top = "280px"
    ssmal_8.style.top = "320px"
    ssmal_4.style.transition = "300ms"
    ssmal_5.style.transition = "300ms"
    ssmal_6.style.transition = "300ms"
    ssmal_7.style.transition = "300ms"
    ssmal_8.style.transition = "300ms"
    ssmal_4.style.transitionDelay = "400ms"
    ssmal_5.style.transitionDelay = "450ms"
    ssmal_6.style.transitionDelay = "500ms"
    ssmal_7.style.transitionDelay = "550ms"
    ssmal_8.style.transitionDelay = "600ms"
}

function fixTransition(x) {
    x.style.transition = "0ms"
    x.style.transitionDelay = "0ms"
}

const purchaseSmallEl = document.querySelector(".purchaseSmall")
const psmal_0 = document.getElementById("purchaseSmall-0")
const psmal_1 = document.getElementById("purchaseSmall-1")
const psmal_2 = document.getElementById("purchaseSmall-2")
const psmal_3 = document.getElementById("purchaseSmall-3")
const psmal_4 = document.getElementById("purchaseSmall-4")
const psmal_5 = document.getElementById("purchaseSmall-5")
const psmal_6 = document.getElementById("purchaseSmall-6")
const psmal_7 = document.getElementById("purchaseSmall-7")

function openPurchaseSmall() {
    purchaseSmallEl.style.height = "100vh"
    psmal_0.style.opacity = "1"
    psmal_1.style.opacity = "1"
    psmal_2.style.opacity = "1"
    psmal_3.style.opacity = "1"
    psmal_4.style.opacity = "1"
    psmal_5.style.opacity = "1"
    psmal_6.style.opacity = "1"
    psmal_7.style.opacity = "1"
    psmal_1.style.top = "50px"
    psmal_2.style.top = "110px"
    psmal_3.style.top = "185px"
    psmal_4.style.top = "223px"
    psmal_5.style.top = "263px"
    psmal_6.style.top = "303px"
    psmal_7.style.top = "343px"
}

function closeSmallPurchase() {
    purchaseSmallEl.style.height = "0px"
    psmal_0.style.opacity = "0"
    psmal_1.style.opacity = "0"
    psmal_2.style.opacity = "0"
    psmal_3.style.opacity = "0"
    psmal_4.style.opacity = "0"
    psmal_5.style.opacity = "0"
    psmal_6.style.opacity = "0"
    psmal_7.style.opacity = "0"
    psmal_1.style.top = "10px"
    psmal_2.style.top = "70px"
    psmal_3.style.top = "145px"
    psmal_4.style.top = "183px"
    psmal_5.style.top = "243px"
    psmal_6.style.top = "263px"
    psmal_7.style.top = "303px"
    psmal_4.style.transition = "300ms"
    psmal_5.style.transition = "300ms"
    psmal_6.style.transition = "300ms"
    psmal_7.style.transition = "300ms"
    psmal_4.style.transitionDelay = "400ms"
    psmal_5.style.transitionDelay = "450ms"
    psmal_6.style.transitionDelay = "500ms"
    psmal_7.style.transitionDelay = "550ms"
}

const smallMenuEl = document.querySelector(".megaMenuSmall")

const msmal_0 = document.getElementById("menuSmall-0")
const msmal_1 = document.getElementById("menuSmall-1")
const msmal_2 = document.getElementById("menuSmall-2")
const msmal_3 = document.getElementById("menuSmall-3")
const msmal_4 = document.getElementById("menuSmall-4")
const msmal_5 = document.getElementById("menuSmall-5")
const msmal_6 = document.getElementById("menuSmall-6")
const msmal_7 = document.getElementById("menuSmall-7")
const msmal_8 = document.getElementById("menuSmall-8")
const msmal_9 = document.getElementById("menuSmall-9")
const msmal_10 = document.getElementById("menuSmall-10")
const msmal_11 = document.getElementById("menuSmall-11")

function openSmallMenu() {
    smallMenuEl.style.height = "100vh"
    msmal_1.style.opacity = "1"
    msmal_2.style.opacity = "1"
    msmal_3.style.opacity = "1"
    msmal_4.style.opacity = "1"
    msmal_5.style.opacity = "1"
    msmal_6.style.opacity = "1"
    msmal_7.style.opacity = "1"
    msmal_8.style.opacity = "1"
    msmal_9.style.opacity = "1"
    msmal_10.style.opacity = "1"
    msmal_11.style.opacity = "1"
    msmal_1.style.top = "60px"
    msmal_2.style.top = "107px"
    msmal_3.style.top = "154px"
    msmal_4.style.top = "201px"
    msmal_5.style.top = "248px"
    msmal_6.style.top = "295px"
    msmal_7.style.top = "342px"
    msmal_8.style.top = "389px"
    msmal_9.style.top = "436px"
    msmal_10.style.top = "483px"
    msmal_11.style.top = "530px"
}

function closeSmallMenu() {
    smallMenuEl.style.height = "0px"
    msmal_1.style.opacity = "0"
    msmal_2.style.opacity = "0"
    msmal_3.style.opacity = "0"
    msmal_4.style.opacity = "0"
    msmal_5.style.opacity = "0"
    msmal_6.style.opacity = "0"
    msmal_7.style.opacity = "0"
    msmal_8.style.opacity = "0"
    msmal_9.style.opacity = "0"
    msmal_10.style.opacity = "0"
    msmal_11.style.opacity = "0"
    msmal_1.style.top = "10px"
    msmal_2.style.top = "67px"
    msmal_3.style.top = "114px"
    msmal_4.style.top = "161px"
    msmal_5.style.top = "208px"
    msmal_6.style.top = "255px"
    msmal_7.style.top = "302px"
    msmal_8.style.top = "349px"
    msmal_9.style.top = "396px"
    msmal_10.style.top = "443px"
    msmal_11.style.top = "490px"
}

const menu1 = document.querySelector(".menu-1")

msmal_1.addEventListener("click", function() {
    menu1.style.opacity = "1"
    menu1.style.width = "100%"
})

function close1() {
    menu1.style.opacity = "0"
    menu1.style.width = "0px"
}

function completeClose1() {
    close1()
    closeSmallMenu()
}

const menu2 = document.querySelector(".menu-2")

msmal_2.addEventListener("click", function() {
    menu2.style.opacity = "1"
    menu2.style.width = "100%"
})

function close2() {
    menu2.style.opacity = "0"
    menu2.style.width = "0px"
}

function completeClose2() {
    close2()
    closeSmallMenu()
}

const menu3 = document.querySelector(".menu-3")

msmal_3.addEventListener("click", function() {
    menu3.style.opacity = "1"
    menu3.style.width = "100%"
})

function close3() {
    menu3.style.opacity = "0"
    menu3.style.width = "0px"
}

function completeClose3() {
    close3()
    closeSmallMenu()
}

const menu4 = document.querySelector(".menu-4")

msmal_4.addEventListener("click", function() {
    menu4.style.opacity = "1"
    menu4.style.width = "100%"
})

function close4() {
    menu4.style.opacity = "0"
    menu4.style.width = "0px"
}

function completeClose4() {
    close4()
    closeSmallMenu()
}

const menu5 = document.querySelector(".menu-5")

msmal_5.addEventListener("click", function() {
    menu5.style.opacity = "1"
    menu5.style.width = "100%"
})

function close5() {
    menu5.style.opacity = "0"
    menu5.style.width = "0px"
}

function completeClose5() {
    close5()
    closeSmallMenu()
}

const menu6 = document.querySelector(".menu-6")

msmal_7.addEventListener("click", function() {
    menu6.style.opacity = "1"
    menu6.style.width = "100%"
})

function close6() {
    menu6.style.opacity = "0"
    menu6.style.width = "0px"
}

function completeClose6() {
    close6()
    closeSmallMenu()
}

const menu7 = document.querySelector(".menu-7")

msmal_8.addEventListener("click", function() {
    menu7.style.opacity = "1"
    menu7.style.width = "100%"
})

function close7() {
    menu7.style.opacity = "0"
    menu7.style.width = "0px"
}

function completeClose7() {
    close7()
    closeSmallMenu()
}

const menu8 = document.querySelector(".menu-8")

msmal_9.addEventListener("click", function() {
    menu8.style.opacity = "1"
    menu8.style.width = "100%"
})

function close8() {
    menu8.style.opacity = "0"
    menu8.style.width = "0px"
}

function completeClose8() {
    close8()
    closeSmallMenu()
}

const menu9 = document.querySelector(".menu-9")

msmal_10.addEventListener("click", function() {
    menu9.style.opacity = "1"
    menu9.style.width = "100%"
})

function close9() {
    menu9.style.opacity = "0"
    menu9.style.width = "0px"
}

function completeClose9() {
    close9()
    closeSmallMenu()
}

const menu10 = document.querySelector(".menu-10")

msmal_11.addEventListener("click", function() {
    menu10.style.opacity = "1"
    menu10.style.width = "100%"
})

function close10() {
    menu10.style.opacity = "0"
    menu10.style.width = "0px"
}

function completeClose10() {
    close10()
    closeSmallMenu()
}