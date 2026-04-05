

let colours=["fir","fir","sec","sec","thi","thi","fou","fou","fif","fif","six",'six'];

$(function(){
colours.sort(() => Math.random() - 0.5);
$(".drum").each(function(i){
$(this)
.removeClass("fir sec thi fou fif six")
.addClass(colours[i])
.attr("data-value",colours[i]);
});
});

let clickedElements = [];
let matchfound=0;
const totalpairs=colours.length/2;

$(".items button").click(function() {
    let $this = $(this);
   
    if ($this.hasClass('show') || clickedElements.length === 2) return;

    $this.addClass('show');
    clickedElements.push($this);

    if (clickedElements.length === 2) {
        if (clickedElements[0].data("value") === clickedElements[1].data("value")){
            console.log("Match!");
           matchfound++;

            clickedElements = [];
            if(matchfound===totalpairs){
                $("h1").text("You Won");
                $("body").css("color","green");
                setTimeout(()=>{
                    location.reload();
                },3000);
            }
           

        } else {
            console.log("No match");
            setTimeout(() => {
                clickedElements[0].removeClass('show');
                clickedElements[1].removeClass('show');
                clickedElements = [];
            }, 1000);
        }
    }
});
