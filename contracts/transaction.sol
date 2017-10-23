pragma solidity ^0.4.11;

contract transaction {

	address seller;
	address buyer;
	uint value;

	enum State {Created, Confirmed, Disabled}
	State state;

	
	modifier  onlySeller(address person) { require(person == seller); _; }
	modifier checkValue(uint addedValue) { require(addedValue == 2*value); _; }
	modifier inState(State s) { require(s == state); _; }
	modifier  onlyBuyer(address person) { require(person == buyer); _; }


	event purchaseConfirmed();
	event receiveConfirmed();
	event refundConfirmed();

	function purchase () public
	    payable
	{
		seller = msg.sender;
		value = (msg.value*1)/2;
	}	

	function confirmPurchase() public
		checkValue(msg.value)
		inState(State.Created)
		payable
	{
		buyer = msg.sender;
		state = State.Confirmed;
		purchaseConfirmed();
	}

	function confirmReceived() public
		inState(State.Confirmed)
		onlyBuyer(msg.sender)
	{
		buyer.transfer(value);
		seller.transfer(this.balance);
		state = State.Disabled;
		receiveConfirmed();
	}

	function refundBuyer() public
		inState(State.Confirmed)
		onlySeller(msg.sender)
	{
		buyer.transfer(2*value);
		seller.transfer(this.balance);
		state = State.Disabled;
		refundConfirmed();
	}

}
