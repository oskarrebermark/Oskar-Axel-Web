function createNavbar() {
    const navbar = document.createElement('nav');
    const menuContent = document.createElement('div');
    menuContent.id = 'menuContent';

    const menuIcon = document.createElement('div');
    menuIcon.classList.add('menuIcon');

    const ul = document.createElement('ul');

    // Define the links and their attributes
    const links = [
        { href: 'index.html', text: 'Home', className: 'thispage' },
        { href: 'projects.html', text: 'Projects' },
        { href: 'contact.html', text: 'Contact' }
    ];

    // Create list items dynamically
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        if (link.className) {
            a.classList.add(link.className);
        }
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Assemble the navbar
    menuContent.appendChild(menuIcon);
    menuContent.appendChild(ul);
    navbar.appendChild(menuContent);

    // Append the navbar to the body or a specific container
    document.body.insertBefore(navbar, document.body.firstChild); // Adds the navbar at the top of the body
}
