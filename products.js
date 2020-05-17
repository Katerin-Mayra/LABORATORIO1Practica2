class Products {
    constructor(id,name, description, quantity) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}
class ProductsManagement {
    constructor() {
        this.listproducts = [];
    }
    addProducts(product) {
        this.listproducts.push(product);
    }
    removeProducts(product) {
        for (var i = 0; i < this.listproducts.length; i++) {
            if (this.listproducts[i]['id'] == product['id']) {
                this.listproducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateProducts(product, newproduct) {
        
        for (var i = 0; i < this.listproducts.length; i++) {
            //console.log(product);
            if (this.listproducts[i]['id'] == product['id']) {
                this.listproducts[i] = newproduct;
                return;
            }else{
                console.log("NO");
                //this.listproducts[i] = newproduct;
            }
        }
    }
    showProducts() {
        return this.listproducts;
    }
    showFirstProducts () {
        return this.listproducts[0];
    }

}
export {Products, ProductsManagement}

$( document ).ready(function() {
    $(".btn_save").hide();
});

$(document).on('click', '.btn_save', function(event) 
{
    var datos = $(this).closest('tr');
    datos.find(".btn_save").hide();
    datos.find(".btn_edit").show();
    datos.find('td div').each(function(index,val){
        $(this)
        .attr('contenteditable', 'false')
        
        .removeClass('bg-warning')
        .css('padding','')
        .css('color','black');
        //.css('background','#FF5733'); 
    });
    
    updateProducts(product, newproduct)
    //console.log(datos);
})

$(document).on('click', '.btn_del', function(event) 
{
    $(this).closest('tr').remove();
})


