from project.hardware.heavy_hardware import HeavyHardware
from project.hardware.power_hardware import PowerHardware
from project.software.express_software import ExpressSoftware
from project.software.light_software import LightSoftware


class System:
    _hardware = []
    _software = []

    @staticmethod
    def register_power_hardware(name: str, capacity: int, memory: int):
        System._hardware.append(PowerHardware(name, capacity, memory))

    @staticmethod
    def register_heavy_hardware(name: str, capacity: int, memory: int):
        System._hardware.append(HeavyHardware(name, capacity, memory))

    @staticmethod
    def register_express_software(hardware_name: str, name: str, capacity_consumption: int, memory_consumption: int):
        try:
            hardware = [h for h in System._hardware if h.name == hardware_name][0]
            software = ExpressSoftware(name, capacity_consumption, memory_consumption)
            hardware.install(software)
            System._software.append(software)
        except IndexError:
            return 'Hardware does not exist'
        except Exception as ex:
            return str(ex)

    @staticmethod
    def register_light_software(hardware_name: str, name: str, capacity_consumption: int, memory_consumption: int):
        try:
            hardware = [h for h in System._hardware if h.name == hardware_name][0]
            software = LightSoftware(name, capacity_consumption, memory_consumption)
            hardware.install(software)
            System._software.append(software)
        except IndexError:
            return 'Hardware does not exist'
        except Exception as ex:
            return str(ex)

    @staticmethod
    def release_software_component(hardware_name: str, software_name: str):
        try:
            hardware = [h for h in System._hardware if h.name == hardware_name][0]
            software = [s for s in System._software if s.name == software_name][0]
            hardware.uninstall(software)
            System._software.remove(software)
        except IndexError:
            return 'Some of the components do not exist'

    @staticmethod
    def analyze():
        total_used_memory = sum(h.used_memory for h in System._hardware)
        total_used_capacity = sum(h.used_capacity for h in System._hardware)
        total_memory = sum([h.memory for h in System._hardware])
        total_capacity = sum([h.capacity for h in System._hardware])
        result = [
            f'System Analysis',
            f'Hardware Components: {len(System._hardware)}',
            f'Software Components: {len(System._software)}',
            f'Total Operational Memory: {total_used_memory} / {total_memory}',
            f'Total Capacity Taken: {total_used_capacity} / {total_capacity}'
        ]
        return '\n'.join(result)

    @staticmethod
    def system_split():
        result = []

        for hardware in System._hardware:
            result.append(f'Hardware Component - {hardware.name}')
            express_software_components = [s for s in hardware.software_components if
                                           s.__class__.__name__ == 'ExpressSoftware']
            result.append(f'Express Software Components: {len(express_software_components)}')
            light_software_components = [s for s in hardware.software_components if
                                         s.__class__.__name__ == 'LightSoftware']
            result.append(f'Light Software Components: {len(light_software_components)}')
            result.append(f'Memory Usage: {hardware.used_memory} / {hardware.memory}')
            result.append(f'Capacity Usage: {hardware.used_capacity} / {hardware.capacity}')
            result.append(f'Type: {hardware.type}')
            used_names = ', '.join(s.name for s in hardware.software_components)
            result.append(
                f'Software Components: {used_names if used_names else None}')

        return '\n'.join(result)
