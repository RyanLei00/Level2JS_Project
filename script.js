var score = 0;
var imageArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var selectedImages = [];
var foundImages = [];

function initialize() 
{
    scoreElement = document.getElementById("score");
    image1 = document.getElementById("image1");
    image2 = document.getElementById("image2");
    image3 = document.getElementById("image3");
    image4 = document.getElementById("image4");
    image5 = document.getElementById("image5");
    image6 = document.getElementById("image6");
    image7 = document.getElementById("image7");
    image8 = document.getElementById("image8");
    image9 = document.getElementById("image9");
    image10 = document.getElementById("image10");
    image11 = document.getElementById("image11");
    imageE12 = document.getElementById("image12");
    image13 = document.getElementById("image13");
    image14 = document.getElementById("image14");
    image15 = document.getElementById("image15");
    image16 = document.getElementById("image16");
    images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];
    shuffle(imageArray);
}

function resetScore() 
{
    score = 0;
    foundImages.length = 0;
    for (let i = 0; i < 16; i++) 
    {
        let value2 = "selectCard(" + i + ");";
        if (!foundImages.includes(i)) 
        {
            images[i].setAttribute("onclick", value2);
        }
    }
    for (let i = 0; i < 16; i++) 
    {
        images[i].src="images/9.png";
    }
    if (selectedImages.length == 1) 
    {
        let value = "selectCard(" + selectedImages[0] + ");";
        images[selectedImages[0]].setAttribute("onclick", value);
        selectedImages.length = 0;
    }
    shuffle(imageArray);
    display();
} 

function selectCard(index) 
{
    if (selectedImages.length == 1)
    {
        if (imageArray[index] == imageArray[selectedImages[0]]) 
        {
            images[selectedImages[0]].removeAttribute("onclick");
            images[index].removeAttribute("onclick");
            let imageSource = "images/" + imageArray[index] + ".png";
            images[index].src=imageSource;
            foundImages.push(selectedImages[0]);
            foundImages.push(index);
            selectedImages.pop();
        } 
        else 
        {
            let imageSource = "images/" + imageArray[index] + ".png";
            images[index].src=imageSource;
            for (let i = 0; i < 16; i++) 
            {
                images[i].removeAttribute("onclick");
            }
            setTimeout(() =>
            {
                console.log(selectedImages);
                images[selectedImages[0]].src="images/9.png";
                images[index].src="images/9.png";
                let value = "selectCard(" + selectedImages[0] + ");";
                images[selectedImages[0]].setAttribute("onclick", value);
                value = "selectCard(" + index + ");";
                images[index].setAttribute("onclick", value);
                for (let i = 0; i < 16; i++) 
                {
                    let value2 = "selectCard(" + i + ");";
                    if (!foundImages.includes(i)) 
                    {
                        images[i].setAttribute("onclick", value2);
                    }
                }
                selectedImages.pop();
            }, 1000 );
        }
        score++;
    }
    else 
    {
        selectedImages.push(index);
        let imageSource = "images/" + imageArray[index] + ".png";
        images[index].src=imageSource;
        images[index].removeAttribute("onclick");
        score++;
    }
    display();
}


function shuffle(array) 
{
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

function display() 
{
    scoreElement.innerHTML = "Score: " + score;
}
