var blogs = document.querySelector('.blogs').children;

var totalblogs = blogs.length;
var blogsperpage = 6;

var index=1;

var prevbutton = document.querySelector(".prev");
var nextbutton = document.querySelector(".next");
prevbutton.addEventListener("click", function()
{
    if(index!=1)
    {
        index--;
        showitems();
    }
})

nextbutton.addEventListener("click",function()
{
    if(index!=blogsperpage-1)
    {
        index++;
        showitems();
    }
})

function showitems()
{
    for(var i=0;i<totalblogs;i++)
    {
        blogs[i].classList.remove("show");
        blogs[i].classList.add("hide");

        //if i between index*blogsperpage - blogsperpage     and    index*blogsperpage
        if(i >= (index*blogsperpage)-blogsperpage  &&  i <(index*blogsperpage))
        {
            blogs[i].classList.remove("hide");
            blogs[i].classList.add("show");
        }
    }
}

window.onload= showitems();

