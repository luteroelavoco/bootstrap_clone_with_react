import React from 'react';
import './card.css';

export default function Card2() {
    return (
        <div className="card">
            <span><i className="fa fa-cloud-download" aria-hidden="true" alt="Download"></i></span>
            <h1> BootstrapCDN </h1>
            <p>When you only need to include Bootstrap’s compiled CSS or JS, you can use 
                   <span className="spnalink">BootstrapCDN</span>.</p>
            <h2>CSS only</h2>

            <div className="overflow">
                <p>  
                     &#60;
                     <span className="spanblue">  link </span>  
                     <span className="spanbluelight">rel= </span>
                     <span className="spanred">"stylesheet" </span> 
                     <span className="spanbluelight"> href= </span> 
                     <span className="spanred"> "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" </span> 
                     <span className="spanbluelight">integrity=</span>
                     <span className="spanred">"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" </span> 
                     <span className="spanbluelight">crossorigin= </span>
                     <span className="spanred"> "anonymous" </span> >
                </p>
            </div>
            <h2>JS, Popper.js, and jQuery</h2>
            <div className="overflow">
            <p>
                &#60;
                <span className="spanblue">  script </span>  
                <span className="spanbluelight">src=</span>
                <span className="spanred"> "https://code.jquery.com/jquery-3.4.1.slim.min.js" </span>
                <span className="spanbluelight">integrity=</span>
                <span className="spanred"> "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" </span>
                <span className="spanbluelight">crossorigin=</span>
                <span className="spanred">"anonymous" </span> 
                <span className="spanblue">
                &#60;/script>
                </span>
            </p>
            <p>
                &#60;
                <span className="spanblue">  script </span>  
                <span className="spanbluelight">src=</span>
                <span className="spanred"> "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" </span>
                <span className="spanbluelight">integrity=</span>
                <span className="spanred"> "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" </span>
                <span className="spanbluelight">crossorigin=</span>
                <span className="spanred">"anonymous" </span> 
                <span className="spanblue">
                &#60;/script>
                </span>
            </p>
            <p>
                &#60;
                <span className="spanblue">  script </span>  
                <span className="spanbluelight">src=</span>
                <span className="spanred"> "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" </span>
                <span className="spanbluelight">integrity=</span>
                <span className="spanred"> "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin=" </span>
                <span className="spanbluelight">crossorigin=</span>
                <span className="spanred">"anonymous" </span> 
                <span className="spanblue">
                &#60;/script>
                </span>
            </p>

            </div>
            <span className="spanspace">__________________</span>
            <button> Explore the Docs </button>
        </div>
    );
}