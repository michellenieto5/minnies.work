"use client";

export default function dvwaPage() {
  return (
    <main className="scroll-smooth min-h-screen px-6 py-4 max-w-6xl mx-auto winky-sans space-y-8">
      {/* Title + meta */}
      <header>
        <h1 className="text-4xl font-bold mb-4">DVWA - Damn Vulnerable Web Application</h1>

        <p className="mb-1">Year: 2024</p>
        <p className="mb-1">Role: Penetrator</p>
        <p className="">
          Technologies: Linux, MySQL, Python, VMWare
        </p>
      </header>

      {/* description */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Overview - Goals</h2>
        <p className="text-lg leading-relaxed">
        This project involved setting up the Damn Vulnerable Web Application (DVWA) on Kali Linux using VMware and a full penetration-testing toolchain (BurpSuite, ProxyFox, MySQL, Apalache). The goal was to actively exploit common web vulnerabilities, understand how insecure web applications behave, and document how attackers can leverage these weaknesses. All testing was performed in a controlled environment designed specifically for security training.
        </p>
      </section>

    qq{/* Vulnerabilities */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Vulnerabilities Identified</h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">

          <li> <strong>Brute Force (Broken Authentication):</strong>  
            Used ProxyFox and BurpSuite to intercept login requests and perform a brute-force attack.  
            Lack of rate limiting, lockouts, or credential protections allowed full admin access.
          </li>

          <li><strong>Command Injection:</strong>  
            The input field passed user data directly to the system shell without sanitization.  
            By injecting commands such as <code>; pwd</code>, I executed arbitrary OS commands on the server.
          </li>

          <li><strong>Cross-Site Request Forgery (CSRF):</strong>  
            The password-change feature used a GET request and lacked CSRF tokens.  
            I modified the URL to change passwords without user confirmation, allowing unauthorized account changes.
          </li>

          <li><strong>File Inclusion / Directory Traversal:</strong>  
            The application failed to block <code>../</code> sequences, allowing traversal outside the intended directory.  
            This enabled access to sensitive files on the server.
          </li>

          <li><strong>Insecure Input Handling:</strong>  
            Across multiple DVWA modules, insufficient validation and sanitization allowed raw user input  
            to directly influence system commands, file paths, or authentication flows.
          </li>

        </ul>
      </section>


      {/*role */}
      <section className="space-y-3">
      <h2 className="text-2xl font-semibold">My Role & Takeaways</h2>
      <p className="text-base leading-relaxed">
      I performed the entire security test cycle myself, from environment setup to exploitation.
      This included configuring DVWA on Kali Linux, intercepting and manipulating web traffic with ProxyFox and BurpSuite, executing brute-force attacks, crafting malicious input for command injection and file inclusion, and analyzing why each attack succeeded.
      I also documented every finding and mapped each vulnerability to the OWASP Top 10 categories.
      </p>

      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
        <li> Gained a strong understanding of how attackers abuse broken authentication, unsanitized input, missing CSRF protections or directory traversal</li>
        <li>Learned how real security misconfigurations turn into exploitable vulnerabilities.</li>
        <li>Built hands-on experience with BurpSuite, ProxyFox, Kali Linux, MySQL, and VM environments.</li>
      </ul>


      <p className="text-base leading-relaxed">
      This project strengthened my understanding of how attackers analyze websites to find vulnerabilities, how they exploit them,  
  and most importantly, how to build secure systems that close those gaps and prevent real-world attacks.
      </p>
    </section>

    <section className="space-y-3">
    <h2 className="text-2xl font-semibold">Full Report (PDF)</h2>

    {/* PDF viewer */}
    <div className="border rounded-xl shadow-lg overflow-hidden bg-white">
      <iframe
        src="/docs/dvwaReport.pdf"
        className="w-full h-[900px]"
        style={{ border: "none" }}
      ></iframe>
    </div>

    <a
      href="/docs/dvwaReport.pdf"
      target="_blank"
      className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition"
    >
      Open Full PDF in New Tab
    </a>
  </section>


    </main>
  );
}