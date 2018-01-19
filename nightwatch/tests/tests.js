const selectors = require('../resource/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },
    after: browser => {
        browser.end ()
    },
  
    "Evens and Odds" : browser => {
        //preconditions: loaded, "1,2,3,4,5"
        browser
        //enter information
            .setValue(selectors.evenOdd, '1,2,3,4,5')
        //click split
            .click(selectors.splitButton)
        //verify results
            .expect.element(selectors.evenResults).text.to.contain('2,4')
        browser
            .expect.element(selectors.oddResults).text.to.contain('1,3,5')
    },

    "Filter Object" : browser => {
        //preconditions: loaded, "hairColor"
        browser
        //enter information
            .setValue(selectors.objectFilter, 'hairColor')
        //click split
            .click(selectors.objectFilterButton)
        //verify results
            .expect.element(selectors.objectFilterResults).text.to.contain('Jeremy Schrader')
            
    },

    "Filter String" : browser => {
        //preconditions: loaded, "a"
        browser
        //enter information
            .setValue(selectors.nameFilter, 'a')
        //click filter
            .click(selectors.nameFilterButton)
        //verify all names containing letter 'a' are in the results box
            .expect.element(selectors.nameFilterResults).text.to.contain("James", "Jessica", "Blake", "Mark", "Maddy")
    },

    "Palindrome" : browser => {
    //preconditions: loaded, "racecar"
    browser
    //enter information
        .setValue(selectors.palindrome, 'racecar')
    //click check
        .click(selectors.palindromeButton)
    //verify input is true
        .expect.element(selectors.palindromeResults).text.to.contain('true')
    },

    "Sum" : browser => {
    //preconditions: loaded, "2,2"
    browser
    //enter information
        .setValue(selectors.sum1, '2')
        .setValue(selectors.sum2, '2')
    //click add
        .click(selectors.sumButton)
    //verify sum is 4
        .expect.element(selectors.sumResults).text.to.equal('Sum: 4')
    }
}