<template>
    <div>
        <nav class="navigate">
            <div>
                <ul class="nav-list">
                    <li id="li-one"><img class="li-img" src="../assets/dash.svg"> Dashboard</li>
                    <li> <img  src="../assets/user.svg">Profile</li>
                    <li> <img  src="../assets/services.svg">Services <img  id="arrow" src="../assets/arrow.svg"></li>
                    <li> <img  src="../assets/medrec.svg">Medical Records</li>
                    <li> <img  src="../assets/care.svg">Care Wallet</li>
                    <li> <img  src="../assets/messages.svg">Messages</li>
                    <li> <img  src="../assets/resources.svg">Resources</li>
                    <hr class="div"/>
                    <li> <img src="../assets/services.svg">Account Settings</li>
                    <li> <img src="../assets/supp.svg">Contact Support</li>
                    <li> <img src="../assets/log.svg">Logout</li>
                </ul>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    name:'Navabar',
    data: () =>{
        return{

        }
    }
}
</script>