import {Products, ProductsManagement} from "./products.js";
class Ui {
    
    constructor() {
        this.proid = document.getElementById("product_id");
        this.uiName = document.getElementById("name");
        this.uiDescription = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        this.uiForm = document.getElementById("form-data");
        //this.btnedit = document.getElementById("test");
        this.btnedit = document.getElementsByClassName("btn_edit");
        //this.uiForm1 = document.getElementById("form-actua");
        this.container = document.getElementById("container-table");
        this.manager =  new ProductsManagement();
        
        //this.oldproduct;
        //let btn = "<a class="btn btn-success btn-xs"> Editar</a>";
        let p1 = new Products(1,"Pollo", "Pollo Sofia", 20);
        let p2 = new Products(2,"Galletas", "Galleras Mabel", 50);
        let p3 = new Products(3,"Pollo", "Pollo Imba", 50);

        this.id = 4;

        //this.newproduct = [];
        //////////////////////
        let p4 = new Products("Pollo", "Pollo 1233333", 50);
        this.manager.addProducts(p1);
        this.manager.addProducts(p2);
        this.manager.addProducts(p3);
        //this.loadEvents();
        this.loadTable();
        this.loadEvents();
        ///////////////////actualizar
        //this.manager.updateProducts(p4);
        ///////////this.manager.updateProducts(p2);
        ////////this.manager.updateProducts(p3);
        //this.loadEvents1();

    }
    loadEvents() {
        //AGREGAR
        this.uiForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addProducts(
                this.id,
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value);
            this.clearForm();
            this.id = this.id + 1
            //$(".btn_save").hide();
            
        });
        //EDITAR
        this.btned = document.getElementById("update")
        this.btned.addEventListener("click", (e) =>{
            e.preventDefault();
            for (var i = 0; i < this.manager.showProducts().length; i++) {
                if(this.proid.value == this.manager.showProducts()[i].id)
                {
                    this.oldproduct = new Products(this.manager.showProducts()[i].id,this.manager.showProducts()[i].name,this.manager.showProducts()[i].description,this.manager.showProducts()[i].quantity);
                }
                console.log(this.oldproduct);
            }
            
            let newproduct = new Products(this.proid.value,this.uiName.value, this.uiDescription.value,this.uiQuantity.value);
            this.manager.updateProducts(this.oldproduct, newproduct);
            this.loadTable();
            //this.clearForm();
        });
            //ELIMINAR
        this.btned = document.getElementById("remove")
        this.btned.addEventListener("click", (e) =>{
            e.preventDefault();
            for (var i = 0; i < this.manager.showProducts().length; i++) {
                if(this.proid.value == this.manager.showProducts()[i].id)
                {
                    this.oldproduct = new Products(this.manager.showProducts()[i].id,this.manager.showProducts()[i].name,this.manager.showProducts()[i].description,this.manager.showProducts()[i].quantity);
                }
                console.log(this.oldproduct);
            }
            
           // let newproduct = new Products(this.proid.value,this.uiName.value, this.uiDescription.value,this.uiQuantity.value);
            this.manager.removeProducts(this.oldproduct);
            this.loadTable();
            //this.clearForm();
        
        }); 
    }
    
   /* actEvents(){
        this.uiForm1.addEventListener("submit", (e) => {
            e.preventDefault();
            this.updateProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value);
            this.clearForm();
        });
    }*/

    clearForm() {
                this.uiName.value = "";
                this.uiDescription.value = ""
                this.uiQuantity.value = ""
    }
    loadTable() {
        var html = "";
        for (var i = 0; i < this.manager.showProducts().length; i++) {
            html += `
            <tr>
                <td scope="row">
                <div>${this.manager.showProducts()[i].id}</div></td>
                <td>
                <div>${this.manager.showProducts()[i].name}</div></td>
                <td><div>${this.manager.showProducts()[i].description}</div></td>
                <td><div>${this.manager.showProducts()[i].quantity}</div></td>
                <td><a class="btn btn-warning btn-xs btn_edit" id="test" data-toggle="collapse" aria-controls="collapseExample" data-target="#collapseExample" aria-expanded="false">Editar <a/></td>
            </tr>`;
        }
        this.container.innerHTML = html;
    }
    addProducts(id,name, description, quantity) {
        let p1 = new Products(id,name, description, quantity);
        this.manager.addProducts(p1);
        this.loadTable();

    }
  /*  updateProducts(name, description, quantity) {
        let p1 = new Products(name, description, quantity);
        this.manager.updateProducts(p1);
        this.loadTable();

    }*/


}


let ui = new Ui();
ui.loadTable();

$(document).on('click', '.btn_edit', function(event) 
{
            var datos = $(this).closest('tr');
            var id = datos.find('td')[0].textContent;
            var nombre = datos.find('td')[1].textContent;
            var descripcion = datos.find('td')[2].textContent;
            var cantidad = datos.find('td')[3].textContent;
            document.getElementById("product_id").value = id;
            document.getElementById("name").value = nombre;
            document.getElementById("description").value = descripcion;
            document.getElementById("quantity").value = cantidad;
})

//shift +alt+a



/////////////////////////////////////////////////////////////////////////
