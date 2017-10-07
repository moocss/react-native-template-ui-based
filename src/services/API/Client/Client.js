import Http from './http/Http';
import Account from './apis/Account';
import Users from './apis/Users';

/**
 * Example API Client
 * @exports services/API/Client
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class Client {
  constructor(defaults = {}) {
    this.http = new Http(defaults);

    this.user = this.user.bind(this);
  }
  /**
   * Get account service instance.
   *
   * @see services/API/Client/apis/Account
   * @example
   * // ...
   * @returns {Account} Account service.
   */
  get account() {
    return new Account(this.http);
  }
  /**
   * Get user service instance.
   *
   * @see services/API/Client/apis/Users
   * @example
   * // ...
   * @returns {Users} User service.
   */
  get users() {
    return this.user(0);
  }
  /**
   * Get user service instance with id.
   *
   * @see services/API/Client/apis/Users
   * @example
   * // ...
   * @param {string} id - User id.
   * @returns {Users} User service with id.
   */
  user(id) {
    if (!this.userService) {
      this.userService = new Users(this.http);
    }
    this.userService.userId = id;
    return this.userService;
  }
}

export default Client;
