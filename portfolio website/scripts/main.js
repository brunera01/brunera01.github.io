/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */	


Page = class {
    currentQuarter;
    projects;
    states = ["Winter 2019-2020","Spring 2020","Fall 2020","Winter 2020-2021","Spring 2021"];
    constructor() {
        let  winter20=[];
        let spring20=[];
        let fall20=[];
        let winter21=[];
        let spring21=[];
        this.currentQuarter = 0;
        this.projects = [];
        let     listElements = document.querySelectorAll("li");
        for(let i = 0; i<listElements.length;i++) {
            if(listElements[i].classList.contains("winter20")) {
                winter20.push(listElements[i]);
            }
            if(listElements[i].classList.contains("spring20")) {
                spring20.push(listElements[i]);
            }
            if(listElements[i].classList.contains("fall20")) {
                fall20.push(listElements[i]);
            }
            if(listElements[i].classList.contains("winter21")) {
                winter21.push(listElements[i]);
            }
            if(listElements[i].classList.contains("spring21")) {
                spring21.push(listElements[i]);
            }
        }
        this.projects.push(winter20);
        this.projects.push(spring20);
        this.projects.push(fall20);
        this.projects.push(winter21);
        this.projects.push(spring21);
        
        this.updateView();
        let buttons = document.querySelectorAll(".quarterSelect");
        for(let i = 0; i<buttons.length;i++) {
            buttons[i].onclick = (params) => {
                console.log(buttons[i].dataset.value);
                
                this.currentQuarter += parseInt(buttons[i].dataset.value);
                console.log(this.currentQuarter);
                if(this.currentQuarter<0) {
                    this.currentQuarter = 0;
                }
                if(this.currentQuarter>=this.states.length) {
                    this.currentQuarter = this.states.length-1;
                }
                this.updateView();
            }
        }
    }
    updateView() {
        let header = document.querySelector("#selected");
        header.innerHTML=this.states[this.currentQuarter];
        for(let i = 0; i<this.projects.length;i++) {
            if(i==this.currentQuarter) {
                for(let j = 0; j<this.projects[i].length;j++) {
                    this.projects[i][j].style.display="block";
                }
            } else {
                for(let j = 0; j<this.projects[i].length;j++) {
                    this.projects[i][j].style.display="none";
                }
            }
        }
    }


}




main = function () {
    document.querySelectorAll
    new Page();
};

main();
