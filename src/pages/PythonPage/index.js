import React from "react";
import "./index.css";
//importing pics
import blurryCodepic from "./images/python1.jpg";
import codingLangpic from "./images/python2.jpg";
import presentationpic from "./images/python3.jpg";
import w3schoolspic from "./images/python4.jpg";
import codingPersonpic from "./images/python5.jpg";
export default function PythonPage() {
  return (
    <>
      <h2>What is Python?</h2>
      <img src={blurryCodepic} width="320" height="240" alt="blurry code" />
      <p>
        Python is one of the best programming languages out there,it is
        <br /> an interpreted, object-oriented, high-level programming language{" "}
        <br />
        with dynamic semantics. Its high-level built in data structures,
        <br /> combined with dynamic typing and dynamic binding, make it
        <br /> very attractive for Rapid Application Development as well as{" "}
        <br />
        for use as a scripting or glue language to connect existing <br />
        components together.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Why Python?</h2>
      <img
        src={codingLangpic}
        width="320"
        height="240"
        alt="coding languages"
      />

      <ul type="disc">
        <h3>&#9745; Advantages:</h3>

        <li>Easy to learn.</li>
        <li>User-friendly data structures.</li>
        <li>High-level language.</li>
        <li>Free, doesn’t require a particular subscription or payment.</li>
        <li>Compatible, doesn't have problems running on most systems.</li>
      </ul>

      <ul type="disc">
        <h3>&#9746; Disadvantages:</h3>

        <li>It has limited database access.</li>
        <li>It's slower than c/c++.</li>
        <li>Developers Have to Use Frameworks and Tools.</li>
        <li>It can't be used for mobile development.</li>
        <li>It consumes a lot of memory.</li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Learning Python(3 ways)</h2>
      <img
        src={presentationpic}
        width="320"
        height="240"
        alt="presenting python"
      />
      <br />
      <br />
      <br />
      <br />
      <h3>1. Learn the Syntax and the basics</h3>
      <p>
        Python is one of the easiest languages to learn in terms
        <br /> of syntax.Go get started learning the syntax
        <br /> first make sure to install Python on your machine.
        <br />
        Just head to Python’s official site, download the <br />
        latest version and you are good to go.Once <br />
        the installation has completed, you may use <br />
        CMD to write and run Python code,
        <br />
        Check{" "}
        <a href="https://www.w3schools.com/python/python_syntax.asp">
          w3schools tutorial on Python syntax.
        </a>
        <br />
        <br />
        <a href="https://www.python.org/downloads/">Download Python</a>
      </p>
      <h3>2. Use W3schools.com to learn Python step by step</h3>
      <img src={w3schoolspic} width="320" height="240" alt="w3schools e.g" />
      <p>
        <a href="https://www.w3schools.com/">W3Schools</a> is a web developers
        site, with tutorials and
        <br /> references on web development languages such as HTML
        <br />
        CSS, JavaScript, PHP, SQL, Python, jQuery, Java, C++, C#, React,
        <br /> XML, W3.CSS, and Bootstrap, covering most aspects of web
        programming.
        <br />
        <br />
        Go to the Python category to start learning Python step by step.
      </p>
      <h3>3. Taking Online courses</h3>
      <img src={codingPersonpic} width="320" height="240" alt="coding person" />
      <p>
        Many python online courses are self-paced so you can start to learn
        <br /> programming in python immediately. From basic Python for
        beginners
        <br /> to advanced online courses, dive into a Python tutorial or Python
        class today!
      </p>
    </>
  );
}
