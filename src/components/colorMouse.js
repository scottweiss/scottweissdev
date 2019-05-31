onmousemove = function(e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX / window.innerWidth
  );
  document.documentElement.style.setProperty(
    "--x-360",
    Math.ceil(e.clientX / window.innerWidth * 360)
  );
  document.documentElement.style.setProperty(
    "--x-100",
    Math.ceil(e.clientX / window.innerWidth * 100)
  );

  document.documentElement.style.setProperty(
    "--y",
    e.clientY / window.innerHeight
  );
  document.documentElement.style.setProperty(
    "--y-360",
    Math.ceil(e.clientY / window.innerHeight * 360)
  );
  document.documentElement.style.setProperty(
    "--y-100",
    Math.ceil(e.clientY / window.innerHeight * 100) + "%"
  );

  document.documentElement.style.setProperty(
    "--xy",
    Math.ceil(e.clientY / window.innerHeight * 180) +
      e.clientX / window.innerWidth * 180
  );
};
