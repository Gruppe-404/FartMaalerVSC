let selectedGroupId = null;


async function loadGroups() {

    const body = document.getElementById("groupTableBody");
    body.innerHTML = "<tr><td colspan='6'>Indlæser...</td></tr>";

    try {

        const response = await axios.get(apiUrl + "/Groups");
        const groups = response.data;

        body.innerHTML = "";

        for (let i = 0; i < groups.length; i++) {

            const g = groups[i];

            body.innerHTML +=
                "<tr>" +
                    "<td>" + g.id + "</td>" +
                    "<td>" + g.name + "</td>" +
                    "<td>" + g.school + "</td>" +
                    "<td>---</td>" +
                    "<td>---</td>" +
                    "<td>" +
                        "<button class='edit-btn' onclick=\"openEditModal(" + g.id + ", '" + g.name + "')\">Rediger</button> " +
                        "<button class='delete-btn-sm' onclick=\"openDeleteModal(" + g.id + ")\">Slet</button>" +
                    "</td>" +
                "</tr>";
        }

    } catch (error) {
        console.log(error);
    }
}


async function createGroup() {

    const name = document.getElementById("groupNameInput").value;

    if (!name) return;

    const group = {
        name: name,
        school: "Roskilde Skole"
    };

    try {

        await axios.post(apiUrl + "/Groups", group);

        document.getElementById("groupNameInput").value = "";

        loadGroups();

    } catch (error) {
        console.log(error);
    }
}


function openEditModal(id, name) {

    selectedGroupId = id;

    document.getElementById("editNameInput").value = name;
    document.getElementById("editSchoolInput").value = "";

    document.getElementById("editGroupModal").style.display = "flex";
}


function closeEditModal() {
    document.getElementById("editGroupModal").style.display = "none";
}


async function confirmEditGroup() {

    const name = document.getElementById("editNameInput").value;
    let school = document.getElementById("editSchoolInput").value;

    if (!name) return;

    if (!school) {
        school = "Roskilde Skole";
    }

    const updated = {
        id: selectedGroupId,
        name: name,
        school: school
    };

    try {

        await axios.put(apiUrl + "/Groups/" + selectedGroupId, updated);

        closeEditModal();
        loadGroups();

    } catch (error) {
        console.log(error);
    }
}


function openDeleteModal(id) {

    selectedGroupId = id;

    document.getElementById("deleteGroupModal").style.display = "flex";
}


function closeDeleteModal() {
    document.getElementById("deleteGroupModal").style.display = "none";
}


async function confirmDeleteGroup() {

    try {

        await axios.delete(apiUrl + "/Groups/" + selectedGroupId);

        closeDeleteModal();
        loadGroups();

    } catch (error) {
        console.log(error);
    }
}