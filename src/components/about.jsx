import "./about.css";

const About = () => {

    const exercise = () => {
        console.log("Test Test Test")

        const ages = [13,45,74,12,78,23,56,33,72,62,46,18,3,93,10
        ];
        //find and console log the sum of all ages
        
        let age = 0
        for (let i = 0; i < ages.length; i++){
            age += ages[i];
        }
        console.log(age);

        //// find the oldest 

        let oldAge = 0;

        for (let i = 0; i < ages.length; i++){
            if(oldAge < ages[i]){
                oldAge = ages[i];
            }
        }
        console.log(oldAge);

    };



    return(
        <div className="about-page">
            <h1> My Online Store</h1>
            <h5>Created by: April Carr</h5>

            <button onClick={exercise}>Do the magic!</button>
        </div>
    );

};

export default About;