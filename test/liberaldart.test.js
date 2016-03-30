/*
Author: Amit Singh
Description: TDD with node.js
*/

var expect = require('chai').expect;
var request = require('superagent');

describe('Sample liberaldart page', function(){
    var liberaldart = require('../lib/liberaldart.js');
    var port = 8080;

    var baseUrl = 'http://localhost:8080';

    before(function(done){
        liberaldart.start(port, done);
    });

    after(function(done){
        liberaldart.stop(done);
    });

    describe('when requested at /hello', function() {

        it('should say hello', function(done) {
            request.get(baseUrl + '/hello').end(function assert(err, res){
                expect(err).to.not.be.ok;
                expect(res).to.have.property('status', 200);
                expect(res.text).to.equal('Hello world!');
                done();
            });
        });

    });
});
