var members=require('./members.js').members;

var Employee=require('./employee.js');




module.exports=function(app)
{

    app.get('/',function(req,res){

            Employee.find().sort({createdAt:-1}).then((result)=>{

                res.render('bruh',{workers:result});
            }).
            catch((err)=>console.log(err));



    });
    app.get('/profile',function(req,res){

        res.render('profile');

    });   

    app.post('/submit',function(req,res){
       const employee= new Employee(
           {
        "Name" :req.body.Name,
        "Email" :req.body.Email,
        "Address":req.body.Address,
        "Phone":req.body.Phone
           }
       ); 
       employee.save().then((result)=>{
        console.log(result);
        res.redirect('/');

       }).catch((err)=>console.log("error detceted"));
    
    });

    app.put('/edit/:id',function(req,res)
    {
    
       

        Employee.findByIdAndUpdate(req.params.id,{

            "Name":req.body.Name,
            "Email":req.body.Email,
            "Address":req.body.Address,
            "Phone":req.body.Phone

        },
        function(err,result)
        {

            if(err)
            {
                res.send(err);

            }
            else
            {

                console.log("document updated");
            }

        }

        );

        res.redirect('/');



    });

    app.delete('/delete/:id',function(req,res){
       

        console.log(req.params.id);
        Employee.findByIdAndDelete(req.params.id,function(err,docs){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("document deleted");
            } 
        });

        res.redirect('/');

    });







    app.listen(5000,()=>console.log("server running"));

};








