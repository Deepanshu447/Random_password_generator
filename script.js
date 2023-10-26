const alluppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const alllowercase ="abcdefghijklmnopqrstuvwxyz";
        const allnumbers ="0123456789";
        const allsymbols ="@#$%^&*()!+";

        const totalchar = document.getElementById('total-char');
        const passwordshow = document.getElementById('password-show');


        const checkbox1 = document.getElementById('upper-case');
        const checkbox2 = document.getElementById('lower-case');
        const checkbox3 = document.getElementById('numbers');
        const checkbox4 = document.getElementById('symbols');


        const randomdata = (dataset)=>{
            return dataset[Math.floor(Math.random()*dataset.length)]

        }

        // console.log(randomdata(allsymbols));
        const generatepassword = (password="") => {
            if(checkbox4.checked){
                password+=randomdata(allsymbols)
            }
            if(checkbox2.checked){
                password+=randomdata(alllowercase)
            }
            if(checkbox3.checked){
                password+=randomdata(allnumbers)
            }
            if(checkbox1.checked){
                password+=randomdata(alluppercase)
            }
            if(password.length<totalchar.value){
                return generatepassword(password);
            }
            
           



            
            passwordshow.value = password;
            console.log(password)
        }