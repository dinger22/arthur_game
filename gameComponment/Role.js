var RoleEnum = require('../GameSetupHelper/RoleEnum.js');

class Role{
    constructor(roleId){
        this.roleId = roleId;
        this.roleCode = RoleEnum.code[roleId]
    }
}

module.exports = Role;