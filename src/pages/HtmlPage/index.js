import React from "react";
import "./index.css";
//importing pics
import whatIsHTMLpic from "./images/html1.jpg";
import htmlStructurepic from "./images/html2.jpg";
import cartoonCodingpic from "./images/html3.jpg";
export default function HtmlPage() {
  return (
    <>
      <h2>What is Html?</h2>
      <img src={whatIsHTMLpic} width="320" height="240" alt="What is html?" />

      <p>
        <strong>
          HTML is the standard markup language for creating Web pages.
        </strong>
      </p>
      <ul type="disc">
        <li>HTML is a language for describing web pages.</li>
        <li>HTML describes the structure of a Web page.</li>
        <li>
          HTML stands for <b>H</b>yper <b>T</b>ext <b>M</b>arkup <b>L</b>
          anguage.
        </li>
        <li>
          HTML is not a programming language, it is a <b>markup language.</b>
        </li>
        <li>
          A markup language is a set of <b>markup tags</b>.
        </li>
        <li>
          HTML uses <b>markup tags</b> to describe web pages.
        </li>
        <li>
          Browsers do not display the HTML tags,but use them to render the
          content of the page.
        </li>
      </ul>
      <img src={htmlStructurepic} width="320" height="240" alt="uhh" />
      <br />
      <br />
      <h3>An HTML template always consists of...</h3>
      <fieldset>
        <legend>
          <strong>HTML tags</strong>
        </legend>
        <table>
          <thead>
            <tr>
              <th>Tag</th>
              <th>Usage</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th className="tags">&lt;HTML&gt;</th>
              <td>Defines the root of an HTML document</td>
            </tr>

            <tr>
              <th className="tags">&lt;head&gt;</th>
              <td>Defines information about the document</td>
            </tr>

            <tr>
              <th className="tags">&lt;head/&gt;</th>
            </tr>
            <tr>
              <th className="tags">&lt;body&gt;</th>
              <td>
                Contain a web page's content, including hyperlinks, images,
                tables, text, etc.
              </td>
            </tr>
            <tr>
              <th className="tags">&lt;body/&gt;</th>
            </tr>
            <tr>
              <th className="tags">&lt;HTML/&gt;</th>
            </tr>
          </tbody>
        </table>
      </fieldset>

      <h3>Advantages and disadvantages of HTML:</h3>
      <img src={cartoonCodingpic} width="320" height="240" alt="whatever" />
      <ol>
        <strong>Advantages:</strong>
        <li>Easy to create a webpage.</li>
        <li>It's plain text so its easy to edit</li>
        <li>Fast to download because the text is compressible</li>
        <li>Can be used to present just about anything on a webpage.</li>
      </ol>
      <ol>
        <strong>Disadvantages:</strong>
        <li>
          It takes a lot of time to create anything that even resembles a
          webpage.
        </li>
        <li>
          It isn't as flexible as other webpage developers like Dreamweaver.
        </li>
        <li>
          It is not centralised, all the webpages must be edited separately
        </li>
      </ol>
    </>
  );
}
