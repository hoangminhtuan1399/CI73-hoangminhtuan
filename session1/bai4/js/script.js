//Tạo contact array
const contact = [
    {
        name: "alice",
        tel: "8164035456",
    },
    {
        name: "bob",
        tel: "5725662397",
    },
    {
        name: "cris",
        tel: "8643094841",
    },
    {
        name: "daniel",
        tel: "8164035456",
    }
]

//Tạo function
update_list = () => {
    sort = (name) => {
        return function(a,b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    }
    contact.sort(sort(name));
    contact_list.innerHTML = "";
    for (let i = 0; i < contact.length; i++) {
        const item = contact[i];
        contact_list.innerHTML += `
            <div class="contact__item">
                <span class="item-name">${item.name}</span>
                <span class="item-tel">${convert(item.tel)}</span>
            </div>
        `
    }
}

convert = (string) => {
    let tel = string.split("")
    tel.splice(0,0,"(")
    tel.splice(4,0,")-")
    tel.splice(9,0,"-")
    return tel.join("");
}

add_contact = () => {
    contact.push(
        {
            name: input_name.value,
            tel: input_tel.value,
        }
    )
    update_list();
}


//Khai báo
const contact_list = document.querySelector("#contact");
const input_name = document.querySelector("#input__name");
const input_tel = document.querySelector("#input__tel");
const input_form = document.querySelector("form");
const input_search = document.querySelector("#input__search");
const btn_search = document.querySelector("#btn__search");
const btn_delete = document.querySelector("#btn__delete");

//Add contact
input_form.addEventListener("submit", () => add_contact());
update_list();

//Tìm kiếm
btn_search.addEventListener("click", () => {
    let search = input_search.value.toLowerCase();
    const contact__items = document.querySelectorAll(".contact__item");
    contact__items.forEach((item) => {
        item.classList.remove("hidden");
        if(!item.children[0].innerHTML.toLowerCase().includes(search)) {
            item.classList.add("hidden");
        }
    })
});

//Xóa trùng
btn_delete.addEventListener("click", () => {
    for (let i = 0; i < contact.length; i++) {
        for (let j = i + 1; j < contact.length; j++) {
            if(contact[j].tel === contact[i].tel) {
                contact.splice(j,1);
            }
        }       
    }
    update_list();
})