var RoleEnum = require('../gameSetupHelper/GameBoardEnum');

class Role{
    constructor(roleId){
        this.roleId = roleId;
        //this.roleCode = RoleEnum.code[roleId]
    }
}

module.exports = Role;