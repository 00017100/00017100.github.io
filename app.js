document.addEventListener('DOMContentLoaded', function () {
    function submitForm(event) {
        event.preventDefault(); 

        const name = document.getElementById('inp1').value;
        const email = document.getElementById('inp2').value;
        const address = document.getElementById('inp3').value;

        if (!name || !email || !address) {
            alert('Please fill in all fields');
            return;
        }

        console.log('Form submitted:', { name, email, address });

        document.getElementById('allvar').reset();
    }

    document.getElementById('allvar').addEventListener('submit', submitForm);
});



const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index){
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((event1) => {
    event1.addEventListener('click', () => {
        if (event1.target.classList.contains('prev')){
            let index = imageIndex - 1;

            if (index < 0){
                index = images.length - 1;
            }

            show(index);

        }
        else if (event1.target.classList.contains('next')){
            let index = imageIndex + 1;
            if (index >= images.length){
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);



