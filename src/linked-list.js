const Node = require('./node');

Function element(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}

class LinkedList {
    
    constructor() 
    {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) 
    {
        var element=new element(data);
        if (this.length>0){
            this.tail.next = element;
            element.previous = this.tail;
            this.tail = element;
        }else{
            this.head=element;
            this.tail=element;
        }
        this.length++;
    }

    head() 
    {
        return this.head;
    }

    tail() 
    {
        return this.tail;
    }

    at(index) 
    {
        var current = this.head;
        var pos=1;
        if (this.length<1 || index<1 || index>this.length){
            return null;
        }
        else
        {
            while (pos < index) 
            {
                current = current.next;
                pos++;
            } 
            return current;
        }
        
    }

    insertAt(index, data) 
    {
        var element=new element(data);
        var current = this.head;
        var pos=1;
        if (index<1 || index>this.length+1){
            return false;
        }
        else{
            //вставка в голову
            if (index==1){
                if (this.length==0){
                    this.head=element;
                    this.tail=element;        
                }
                else{
                    this.head=element;
                    this.head.next=current;
                    current.previous=element;
                }
            }
            //вставка в конец
            else if (index==this.length){
                current=this.tail;
                this.tail=element;
                this.tail.previous=current;
                current.next=this.tail;
            }
            //вставка в конец+1
            else if (index==this.length+1){
                append(data);
            }
            else{
                while(pos<index){
                    current=current.next;
                    pos++;
                }
                var before=curent;
                var after=current.next;
                before.next=element;
                element.prprevious=before;
                after.prprevious=element;
                element.next=after;
            }
            this.length++;
            return true;
        }
    }

    isEmpty() 
    {
        if (this.length==0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    clear()
    {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    deleteAt(index) 
    {
        var current = this.head;
        var pos=1;
        if (this.length<1 || index<1 || index>this.length){
            return false;
        }
        else{
            //проверка или не голова
            if (index==1){
                this.head=this.head.next;
                //если был только 1 элемент
                if (!this.head){
                    this.head.previous=null;
                }
                else{
                    this.tail=null;
                }
            }
            //проверка или не хвост
            if (index==this.length){
                this.tail=this.tail.previous;
                this.tail.next = null;
            }
            //где-то между головой и хвостом
            else{
                while(pos<index){
                    current=current.next;
                    pos++;
                }
                var before=curent.previous;
                var after=current.next;
                before.next=after;
                after.previous=before;
                current=null;
            }
            this.length--;
        }
    }

    reverse() 
    {
        var current = this.head;
        this.head=this.tail;
        this.tail=current;
    }

    indexOf(data) 
    {
        var current = this.head;
        var pos=1;
        while (pos < this.length) 
        {
            if (current.data==data){
                return pos;
            } 
            current = current.next;
            pos++;
        } 
        return false;
    }
}

module.exports = LinkedList;
